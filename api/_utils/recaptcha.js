import got from 'got'

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY

const recaptcha = got.extend({
  prefixUrl: 'https://www.google.com/recaptcha/api/',
  resolveBodyOnly: true,
  responseType: 'json'
})

async function verify (response) {
  const { success } = await recaptcha.post('siteverify', {
    form: {
      secret: RECAPTCHA_SECRET_KEY,
      response
    }
  })
  return success
}

export default { verify }
