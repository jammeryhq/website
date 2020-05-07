import got from 'got'

const MAILJET_PUBLIC_KEY = process.env.MAILJET_PUBLIC_KEY
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY

const mailjet = got.extend({
  prefixUrl: 'https://api.mailjet.com/v3.1/',
  username: MAILJET_PUBLIC_KEY,
  password: MAILJET_SECRET_KEY,
  responseType: 'json',
  resolveBodyOnly: true
})

export default mailjet
