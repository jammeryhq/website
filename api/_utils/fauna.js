import got from 'got'

const FAUNA_SECRET_KEY = process.env.FAUNA_SECRET_KEY

const fauna = got.extend({
  prefixUrl: 'https://graphql.fauna.com/',
  headers: { Authorization: `Bearer ${FAUNA_SECRET_KEY}` },
  resolveBodyOnly: true,
  responseType: 'json'
})

export default fauna
