import got from 'got'

const FAUNA_SECRET_KEY = process.env.FAUNA_SECRET_KEY
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

const fauna = got.extend({
  prefixUrl: 'https://graphql.fauna.com/graphql',
  headers: { Authorization: `Basic ${FAUNA_SECRET_KEY}` },
  resolveBodyOnly: true,
  responseType: 'json'
})

const recaptcha = got.extend({
  prefixUrl: 'https://www.google.com/recaptcha/api/',
  resolveBodyOnly: true,
  responseType: 'json'
})

export default async (req, res) => {
  try {
    if (!req.headers.recaptcha) throw new Error('No reCaptcha token provided.')

    const { success } = await recaptcha.post('siteverify', {
      form: {
        secret: RECAPTCHA_SECRET_KEY,
        response: req.headers.recaptcha
      }
    })
    if (!success) throw new Error('Failed reCaptcha verification')
  } catch (error) {
    return res.json({ data: null, errors: [{ message: error.message }] })
  }

  try {
    const data = await fauna.post('/', { json: req.body })

    res.json(data)
  } catch (error) {
    res.status(500).send(error.response.body)
  }
}
