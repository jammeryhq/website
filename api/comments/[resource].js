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
          email
          resource
          content
        }
      }
    }`

    const data = await fauna.post('graphql', { json: { query, variables } })

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.response.body)
  }
}
