var minixhr = require('minixhr')

module.exports = function (username, cb) {

  var url = 'https://twitter.com/' + username
  url = 'https://cors-anywhere.herokuapp.com/' + url

  minixhr(url, response)
  var res = []

  function response (data, response, xhr, header) {
    var minidoc = document.createElement('div')
    minidoc.innerHTML = data
    var tweets = minidoc.querySelectorAll('.js-stream-tweet')
    tweets.forEach(function (node) {
      var tweet = node.dataset
      if (!tweet) {
        // bad tweet?
        return
      }
      var item = {
        username: node.querySelector('.username').innerText || '',
        body: node.querySelector('.js-tweet-text').innerText || '',
        fullname: node.querySelector('.fullname').innerText || '',
        avatar: node.querySelector('.js-action-profile-avatar').value,
        avatar: node.querySelector('.time').value,
        url: 'https://twitter.com' + node.querySelector('.time a').getAttribute('href'),
        timestamp: node.querySelector('.time a').getAttribute('title')
      }

      res.push({
        username: item.username,
        fullname: item.fullname,
        retweet: item.username.toLowerCase() !== '@'+username.toLowerCase(),
        url: item.url,
        content: item.body,
        date: item.timestamp
      })

    })

    cb(null, res)
  }
}
