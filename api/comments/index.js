import crypto from 'crypto'
import fauna from '../_utils/fauna'
import marked from 'marked'
import recaptcha from '../_utils/recaptcha'
import sanitize from 'sanitize-html'

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
      allowedAttributes: {
        a: ['href', 'name', 'target', 'rel']
      }
    })
    console.log(sanitizedMarkdown)

    if (!sanitizedMarkdown) throw new Error('No content exists after sanitization.')

    const gravatarHash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex')

    const variables = { comment: { email, author, content: sanitizedMarkdown, resource: sanitizedResource, gravatar: gravatarHash } }
    const query = `mutation CreateComment ($comment: CommentInput!) {
      createComment(data: $comment) {
        _id
      }
    }`

    const { errors } = await fauna.post('graphql', { json: { query, variables } })
    if (errors && errors.length) throw new Error(errors[ 0 ].message)

    res.json({ status: 'success' })
  } catch (error) {
    return res.send({ status: 'error', message: error.message })
  }
}
