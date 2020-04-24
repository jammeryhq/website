// Function to add a new subscriber to a Moosend mailing list
const got = require('got').default

const MOOSEND_API_KEY = process.env.MOOSEND_API_KEY
const MOOSEND_LIST_ID = process.env.MOOSEND_LIST_ID

const moosend = got.extend({
  prefixUrl: 'https://api.moosend.com/v3/',
  search: `apikey=${MOOSEND_API_KEY}`,
  responseType: 'json',
  resolveBodyOnly: true
})

module.exports = async (req, res) => {
  try {
    const { email, name } = req.body
    if (!email || !name) throw new Error('Missing required field.')

    const subscriberPayload = { Name: name, Email: email }
    const response = await moosend.post(`subscribers/${MOOSEND_LIST_ID}/subscribe.json`, { json: subscriberPayload })

    if (response.Error) throw new Error('Something went wrong - please try again.')
    res.json({ status: 'success', message: 'Successfully added subscriber.' })
  } catch (error) {
    res.json({ status: 'error', message: error.message })
  }
}
