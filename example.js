var twitterFeed = require('.')

twitterFeed('ninabreznik', function (err, tweets) {
  document.body.innerHTML = `<xmp>${JSON.stringify(tweets, null, 2)}</xmp>`
  console.log(tweets)
})
