import { ContactData } from '../entities/utils.entities'

export default class DataInteractor {
    constructor(db, twitter, settings) {
        this.db = db
        this.settings = settings
        this.twitter = twitter
    }

    async getTweets() {
        try {

            const twitter_account = await this.db.get(this.settings.CORE.DB.TWITTER_ACCOUNT_KEY)
            let getTwitterData = new Promise((resolve, reject) => {

                const twitter_params = { screen_name: twitter_account, count: this.settings.CORE.TWITTER.TWEETS_TO_RETRIEVE }
                this.twitter.get(this.settings.CORE.TWITTER.ENDPOINT, twitter_params, (error, tweets, response) => {

                    if (error) reject({ message: this.settings.CORE.MESSAGES.GET_ERROR, data: error })
                    let only_tweets = tweets.map(tweet => tweet.text)
                    let message = (only_tweets.length > 0) ? this.settings.CORE.MESSAGES.GET_TWEETS_SUCCESS : this.settings.CORE.MESSAGES.GET_TWEETS_NOT_FOUND
                    resolve({ message: message, data: only_tweets, account: twitter_account })

                })

            })
            return getTwitterData.then((resp) => resp)

        } catch (error) { throw new Error(this.settings.CORE.MESSAGES.GET_ERROR + ': ' + error.message) }
    }

    async postContact(raw_information) {
        try {

            const information = new ContactData(raw_information)
            const serial = await this.db.set(this.settings.CORE.DB.CONTACT_SERIAL_KEY, { $add: 1 })
            const dataTosave = { ip: information.ip, name: information.name.slice(0, 50), email: information.email.slice(0, 50), message: information.message.slice(0, 700) }

            await this.db.set(this.settings.CORE.DB.CONTACT_KEY + serial, dataTosave)
            return { ok: true, message: this.settings.CORE.MESSAGES.POST_CONTACT_SUCCESS }

        } catch (error) { throw new Error(this.settings.CORE.MESSAGES.SET_ERROR + ': ' + error.message)  }
    }
}