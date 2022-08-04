
export default {
    SERVER: {
        ROUTES:{
            HOME:'/',
            GET_DATA:'/data',
            POST_DATA:'/data',
            GET_TWEETS: '/tweets',
            POST_CONTACT: '/contact',
        },
    },
    CORE: {
        DB:{
            DATA_KEY: 'data',
            TWITTER_ACCOUNT_KEY: 'twitter_account',
            CONTACT_SERIAL_KEY: 'contactMessages:id',
            CONTACT_KEY: 'contactMessages:'
        },
        MESSAGES:{
            SET_SUCCESS: 'Information saved successfully',
            SET_ERROR: 'Error saving information',
            GET_SUCCESS: 'Information retrieved successfully',
            GET_ERROR: 'Error retrieving information',
            GET_TWEETS_SUCCESS: 'Tweets retrieved successfully',
            GET_TWEETS_NOT_FOUND: 'No tweets found',
            GET_TWEETS_TIMEOUT: 'Retrieving Twitter timeout',
            POST_CONTACT_SUCCESS: 'Message sent successfully 📨'
        },
        TWITTER:{
            ENDPOINT: 'statuses/user_timeline',
            TWEETS_TO_RETRIEVE: 5
        }
    }
}