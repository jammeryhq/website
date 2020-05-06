import fauna from '../_utils/fauna'
import recaptcha from '../_utils/recaptcha'
import sanitize from 'sanitize-html'
import marked from 'marked'

export default async (req, res) => {
  const { content, resource, email, author } = req.body

  try {
    if (!req.headers.recaptcha) throw new Error('No reCaptcha token provided.')
    const success = await recaptcha.verify(req.headers.recaptcha)
    if (!success) throw new Error('Failed reCaptcha verification')
  } catch (error) {
    return res.send({ status: 'error', message: error.message })
  }

  try {
    if (!content || !resource || !email || !author) throw new Error('Missing required field.')
    const sanitizedResource = resource.slice(resource.lastIndexOf('/') + 1)

    const markdown = marked(content)
    const sanitizedMarkdown = sanitize(markdown, {
      allowedTags: ['b', 'i', 'em', 'strong', 'a', 'code', 'br', 'pre'],
      allowedAttributes: {
        a: ['href', 'name', 'target']
      },
      allowedSchemes: ['http', 'https']
    })

    if (!sanitizedMarkdown) throw new Error('No content exists after sanitization.')

    const variables = { comment: { email, author, content: sanitizedMarkdown, resource: sanitizedResource } }
    const query = `mutation CreateComment ($comment: CommentInput!) {
      createComment(data: $comment) {
        _id
        _ts
        author
        resource
        email
        content
      }
    }`

    const { data, errors } = await fauna.post('graphql', { json: { query, variables } })
    if (errors && errors.length) throw new Error(errors[ 0 ].message)

    res.json(data.createComment)
  } catch (error) {
    return res.send({ status: 'error', message: error.message })
  }
}
