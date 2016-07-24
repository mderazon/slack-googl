const googl = require('goo.gl')
const slack_token = process.env.slack_token
const api_key = process.env.api_key

if (!slack_token) { throw new Error('Missing slack_token') }
if (!api_key) { throw new Error('Missing api_key') }

googl.setKey(api_key)

module.exports = function (req, res) {
  if (!req.body) {
    res.status(400).send()
  }

  if (req.body.token !== slack_token) {
    res.status(400).send('Missing or incompatible Slack token')
  }

  const short = req.body.text.startsWith('http://goo.gl/') || req.body.text.startsWith('https://goo.gl/')
  const cmd = short ? 'expand' : 'shorten'

  googl[cmd](req.body.text)
  .then(function (url) {
    res.status(200).send(url)
  })
  .catch(function (err) {
    res.status(500).send(err.message)
  })
}
