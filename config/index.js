module.exports = {
  weibo: {
    appkey: '3531894150',
    secret: '525fe2942b30ba2daa9463a717f73ee0',
    oauth_callback_url: '/auth/weibo/callback'
  },
  session: {
    prefix: 'weibo:test:login:',
    cookie: {
      signed: false,
      macage: 60 * 60
    }
  }
}
