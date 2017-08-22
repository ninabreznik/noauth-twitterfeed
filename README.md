# noauth-twitterfeed

> get a JSON array of a Twitter user's latest tweets -- no Twitter API required!

## background

Inspired by  [Latest tweets](https://github.com/noffle/latest-tweets/blob/master/README.md) by
[noffle](https://github.com/noffle).

This was written to be used in the browser, which is why it embeds a CORS proxy url so you can
use it without any configuration in the browser using e.g.
[browserify](https://github.com/substack/node-browserify).

## usage

```js
var twitterFeed = require('noauth-twitterfeed')

twitterFeed({ username: 'ninabreznik' }, function (err, tweets) {
  console.log(tweets)
})
```

This will output an array of objects:

```js
[
  {
    "username": "@ninabreznik",
    "fullname": "Nina Breznik  📍 🇬🇧",
    "retweet": false,
    "url": "https://twitter.com/ninabreznik/status/840190917680087045",
    "content": "So happy to start this awesome journey 3 years ago! --w @serapath @codingamigos @wizardamigos \nhttp://www.codingamigos.com/ pic.twitter.com/3gs14NWWzh",
    "date": "5:21 AM - 10 Mar 2017"
  },
  {
    "username": "@ninabreznik",
    "fullname": "Nina Breznik  📍 🇬🇧",
    "retweet": false,
    "url": "https://twitter.com/ninabreznik/status/899421395247132676",
    "content": "Backup data from your server with @dat_project \n$ npm install -g dat\n$ dat share .  # on server\n$ dat clone dat://...  # on local computer",
    "date": "5:02 PM - 20 Aug 2017"
  },
  {
    "username": "@feross",
    "fullname": "Feross",
    "retweet": true,
    "url": "https://twitter.com/feross/status/898730336082776064",
    "content": "The React license allows Facebook to violate patents of companies that use React, and those companies can't sue to stop Facebook",
    "date": "7:16 PM - 18 Aug 2017"
  }
  ...
```

## api

```js
var noauth-twitterfeed = require('noauth-twitterfeed')
```
## example

Clone the repository and run `npm start` to see the example.js or [see the demo page](https://ninabreznik.github.io/noauth-twitterfeed/)

### noauth-twitterfeed({ username }, cb(err, tweets))

Specify a `username` of the timeline and optionally another CORS proxy url. The callback `cb` will contain an
optional error as its first parameter, and an array with the user's latest
tweets as its second parameter.

## installation

```sh
$ npm i noauth-twitterfeed
```

## ever-shifting ground

Scraping HTML is a foundation upon ever-shifting ground. As Twitter changes
[what is essentially an unofficial API], things will break. If you notice that
`noauth-twitterfeed` isn't working, please file an issue. Better yet, file a fixing
pull request.

## license

MIT
