module.exports = {
  WATSON_TONE_API_KEY: {
    username: process.env.WATSON_TONE_USERNAME,
    password: process.env.WATSON_TONE_PASSWORD
  },
  WATSON_NLU_API_KEY: {
    username: process.env.WATSON_NLU_USERNAME,
    password: process.env.WATSON_NLU_PASSWORD
  },
  TWITTER_API_KEY: {
    consumerKey: process.env.TWITTER_API_CONSUMERKEY,
    consumerSecret: process.env.TWITTER_API_CONSUMERSECRET,
    accessToken: process.env.TWITTER_API_ACCESSTOKEN,
    accessTokenSecret: process.env.TWITTER_API_ACCESSTOKENSECRET,
    timeout: 60 * 1000,
  },
  MM_API_KEY: process.env.MM_API_KEY,
  DATABASE_URL: process.env.MONGODB_URI
};