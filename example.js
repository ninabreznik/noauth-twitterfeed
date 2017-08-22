var twitterFeed = require('.')

twitterFeed({username:'ninabreznik'}, function (err, tweets) {
  document.body.innerHTML = `<xmp>${JSON.stringify(tweets, null, 2)}</xmp>`
  console.log(tweets)
})
