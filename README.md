# freshness
exit(1) if there is any outdated package

## npm outdated as a test
if there is any outdated package in your `package.json`, it should be an error to keep your dependencies up to date. This freshness command helps you to check them and notice you by falling a command if you are using an old package in your `package.json`. If you'd like to manage by automated pull-requests, you should try [greenkeeper](https://github.com/greenkeeperio/greenkeeper).

## getting started
install the package via `npm install`
> $ npm install --save-dev freshness

add a run-script to your package.json:
```json
{
 "test": "freshness"
}
```

run it
> $ npm test

## Usage
See `--help`:
```
freshness.js --help

  Usage: freshness [options]

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```
