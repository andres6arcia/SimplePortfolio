export default {
    ROUTES:{
        HOME:'/',
        GET_DATA:'/data',
        POST_DATA:'/data',
        GET_TWEETS: '/tweets'
    },
    DB:{
        DATA_KEY: 'data',
        TWITTER_ACCOUNT_KEY: 'twitter_account'
    },
    MESSAGES:{
        SAVE_SUCCESS: 'Information saved successfully',
        GET_SUCCESS: 'Information retrieved successfully',
        GET_ERROR: 'Error retrieving information',
        GET_TWEETS_SUCCESS: 'Tweets retrieved successfully',
        GET_TWEETS_NOT_FOUND: 'No tweets found'
    },
    TWITTER:{
        ENDPOINT: 'statuses/user_timeline',
        TWEETS_TO_RETRIEVE: 5
    }
}