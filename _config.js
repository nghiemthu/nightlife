var ids = {
  github: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  linkedin: {
    clientID: 'get_your_own',
    clientSecret: 'get_your_own',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  },
  twitter: {
    consumerKey: 'fDi88c2cAlxDry4MYK2EVFrNz',
    consumerSecret: '8TBLvlxeWJcv7sUsFmKFGGNPX3XDRzrLKg4JIoE1vL3QLKWRqx',
    callbackURL: "https://nightlife-thu.herokuapp.com/auth/twitter/callback"
  }
};

module.exports = ids;