# slack-googl

> Goog.gl URL shortener as a Slack command

## Install
Deploy to AWS Lambda / Google Cloud Functions.
You will need a public endpoint when you set up Slack.

## Requirements
Script expects two env variables:

1. `api_key`: goo.gl doesn't let you access the api without a key. Get one from Goog.gl at your cloud console.
2. `slack_token`: This script runs as a Slack "[slash command](https://api.slack.com/slash-command)". Create a new slash command for your project at https://my.slack.com/services/new/slash-commands. Get your token from there.


