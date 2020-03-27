require('@babel/register')({
  cwd: __dirname,
  ignore: [
    /node_modules/
  ]
})

const gulp = require('gulp')

const {
  default: preCommit
} = require('./build')

gulp
  .task('pre-commit', preCommit)
