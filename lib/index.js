const exec = require('child_process').exec

function freshness (options, cb) {
  exec('npm outdated --depth=0 --json=true', function (err, stdout) {
    if (err) return cb(err)

    stdout = JSON.parse(stdout)
    stdout = Object.keys(stdout)

    if (options.ignore) {
      stdout = stdout.filter(p => !options.ignore.includes(p))
    }

    if (stdout.length !== 0) return cb(stdout)
    return cb(null)
  })
}

module.exports = freshness
