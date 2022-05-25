import { api, data, params } from "@serverless/cloud"
import CFX from "./configurations"
import Twitter from "twitter"

// Get all information of the portfolio from the database
api.get('/data', async (req, res) => {

  try {
    const information = await data.get('data')
    res.status(200).send({ message: 'Information retrieved successfully', data: information })
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving information', data: error.message })
  }

});


// Let edit the information of the portfolio in the database
api.post('/data', async (req, res) => {

  try {

    const { names, role, personal_summary, interests, contact, work, education, skills } = req.body
    await data.set('data', { names, role, personal_summary, interests, contact, work, education, skills })
    res.status(200).send({ message: 'Information saved successfully', data: { names, role, personal_summary, interests, contact, work, education, skills } })

  } catch (error) {
    res.status(500).send({ message: 'Error retrieving information', data: error.message })
  }

})


// Get the last 5 tweets of a Twitter account
api.get('/tweets', async (req, res) => {

  try {

    const twitter = new Twitter({
      consumer_key: params.consumer_key,
      consumer_secret: params.consumer_secret,
      access_token_key: params.access_token_key,
      access_token_secret: params.access_token_secret
    })

    const twitter_account = await data.get('twitter_account')
    twitter.get('statuses/user_timeline', { screen_name: twitter_account, count: 5 }, (error, tweets, response) => {
      if (!error) {
        if (tweets.length > 0) {

          let only_tweets = tweets.map(tweet => tweet.text)
          res.status(200).send({ message: 'Tweets retrieved successfully', data: only_tweets, account: twitter_account })

        } else { res.status(200).send({ message: 'No tweets found', data: [] }) }
      } else { res.status(500).send({ message: 'Error retrieving information', data: error.message }) }
    })

  } catch (error) {
    res.status(500).send({ message: 'Error retrieving information', data: error.message })
  }

})


// Send message from the contact form
api.post('/contact', async (req, res) => {
  
    try {

      const { name, email, message } = req.body
      const forwarded = req.headers['x-forwarded-for']
      const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
      const serial = await data.set('contactMessages:id',{$add:1})
      
      await data.set('contactMessages:'+serial, {ip, name:name.slice(0,50), email:email.slice(0,50), message:message.slice(0,700)})
      res.status(200).send({ message: 'Message sent successfully' })

    }catch(error){
      res.status(500).send({ message: 'Error sending message', data: error.message })
    }

})
