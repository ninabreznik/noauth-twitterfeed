(function () {
  var socket = document.createElement('script')
  var script = document.createElement('script')
  socket.setAttribute('src', 'http://127.0.0.1:1337/socket.io/socket.io.js')
  script.type = 'text/javascript'

  socket.onload = function () {
    document.head.appendChild(script)
  }
  script.text = ['window.socket = io("http://127.0.0.1:1337");',
  'socket.on("bundle", function() {',
  'console.log("livereaload triggered")',
  'window.location.reload();});'].join('\n')
  document.head.appendChild(socket)
}());
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var tweeterFeed = require('.')

tweeterFeed('ninabreznik', function (err, tweets) {
  document.body.innerHTML = `<xmp>${JSON.stringify(tweets, null, 2)}</xmp>`
  console.log(tweets)
})

},{".":2}],2:[function(require,module,exports){
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

},{"minixhr":3}],3:[function(require,module,exports){
module.exports = function xhr2 (params, callback) {
  var url = typeof params === 'string' ? params : params.url
  var method = params.method || (params.data ? 'POST' : 'GET')
  var body = params.data
  var H = params.headers ? params.headers : params.body ? {
    'X-Requested-With' :'XMLHttpRequest',
    'Content-Type'     :'application/x-www-form-urlencoded'
  } : {}
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  for (var key in H) xhr.setRequestHeader(key, H[key])
  xhr.onload = xhr.onerror = function (response) {
    var Hjson = {}, h = xhr.getAllResponseHeaders()
    ;(h.match(/([^\n\r:]+):([^\n\r]+)/g)||[]).forEach(function(item){
      var tmp = item.split(': ')
      Hjson[tmp[0]] = tmp[1]
    })
    if (callback) callback(this.response, response, xhr, Hjson)
  }
  xhr.send(body||null)
}

},{}]},{},[1]);
