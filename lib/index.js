const exec = require('child_process').exec

function freshness (cb) {
  exec('npm outdated --depth=0', function (err, stdout) {
    if (err) return cb(err)
    if (stdout.length !== 0) return cb(stdout)
    return cb(null)
  })
}

module.exports = freshness
