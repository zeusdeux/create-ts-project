const ora = require('ora')
const chalk = require('chalk')
const status = chalk.bold.grey

const spinner = ora()
const start = spinner.start.bind(spinner)
const fail = spinner.fail.bind(spinner)
const succeed = spinner.succeed.bind(spinner)

spinner.start = (...args) => start(status(...args))
spinner.fail = (...args) => fail(status(...args))
spinner.succeed = (...args) => succeed(status(...args))
spinner.setMsg = msg => {
  spinner.text = status(msg)
  return spinner
}

module.exports = spinner
