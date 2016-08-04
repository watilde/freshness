#!/usr/bin/env node
var program = require('commander')
var pkg = require('../package.json')
var freshness = require('../lib/')

program
  .version(pkg.version)
  .parse(process.argv)

freshness(function (out) {
  if (out) {
    console.log(out)
    process.exit(1)
  }

  process.exit(0)
})
