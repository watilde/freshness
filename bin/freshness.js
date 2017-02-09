#!/usr/bin/env node
var program = require('commander')
var pkg = require('../package.json')
var freshness = require('../lib/')

function list (val) {
  return val.split(',').map(p => p.trim())
}

program
  .version(pkg.version)
  .option('-i, --ignore <packages>', 'A comma separated list of packages to ignore', list)
  .parse(process.argv)

freshness(program, function (out) {
  if (out) {
    console.log(out)
    process.exit(1)
  }

  process.exit(0)
})
