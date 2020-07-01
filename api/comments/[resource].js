import fauna from '../_utils/fauna'

export default async (req, res) => {
  const { resource } = req.query
  try {
    const variables = { resource }
    const query = `query CommentsByResource($resource: String!) {
      allCommentsByResource(resource: $resource) {
        data {
          _id
          _ts
          author
          gravatar
          resource
          content
        }
      }
    }`

    const { data, errors } = await fauna.post('graphql', { json: { query, variables } })
    if (errors && errors.length) throw new Error(errors[ 0 ].message)

    res.json(data.allCommentsByResource.data)
  } catch (error) {
    return res.send({ status: 'error', message: error.message })
  }
}
