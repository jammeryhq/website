// Function to send a contact form submission via Mailjet
import mailjet from './_utils/mailjet'
import recaptcha from './_utils/recaptcha'

export default async (req, res) => {
  try {
    const { name, email, message } = req.body
    if (!email || !name || !message) throw new Error('Missing required field.')

    if (!req.headers.recaptcha) throw new Error('No reCaptcha token provided.')
    const success = await recaptcha.verify(req.headers.recaptcha)

    if (!success) throw new Error('Failed reCaptcha verification.')

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
