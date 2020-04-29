// Function to send a contact form submission via Mailjet
import got from 'got'

const MAILJET_PUBLIC_KEY = process.env.MAILJET_PUBLIC_KEY
const MAILJET_SECRET_KEY = process.env.MAILJET_SECRET_KEY
const HCAPTCHA_SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY

const mailjet = got.extend({
  prefixUrl: 'https://api.mailjet.com/v3.1/',
  username: MAILJET_PUBLIC_KEY,
  password: MAILJET_SECRET_KEY,
  responseType: 'json',
  resolveBodyOnly: true
})

const hcaptcha = got.extend({
  prefixUrl: 'https://hcaptcha.com/',
  responseType: 'json',
  resolveBodyOnly: true
})

export default async (req, res) => {
  try {
    const { hcaptchaResponse, name, email, message } = req.body
    if (!hcaptchaResponse) throw new Error('Missing hCaptcha token.')
    if (!email || !name || !message) throw new Error('Missing required field.')

    const hcaptchaPayload = { secret: HCAPTCHA_SECRET_KEY, response: hcaptchaResponse }
    const { success: hcaptchaSuccess } = await hcaptcha.post('siteverify', { form: hcaptchaPayload })

    if (!hcaptchaSuccess) throw new Error('Failed hCaptcha verification.')

    const messagePayload = {
      Messages: [
        {
          From: { Email: 'website@jammeryhq.com', Name: 'JammeryHQ' },
          To: [{ Email: 'hello@jammeryhq.com', Name: 'Team' }],
          TemplateID: 1376397,
          TemplateLanguage: true,
          Variables: { name, email, message }
        }
      ]
    }
    const { Messages: [{ Status: messageStatus }] } = await mailjet.post('send', { json: messagePayload })

    if (messageStatus === 'error') throw new Error('Something went wrong - please try again.')
    res.json({ status: 'success', message: 'Successfully sent message.' })
  } catch (error) {
    res.json({ status: 'error', message: error.message })
  }
}
