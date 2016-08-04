var freshness = require('../lib/')
freshness(function (out) {
  if (out) {
    process.exit(0) // should be error
  }

  process.exit(1)
})
