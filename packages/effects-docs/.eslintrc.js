// https://www.gatsbyjs.org/docs/eslint/
module.exports = {
  ignorePatterns: [
    '**/highlight/**',
    '**/*example*.js'
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}
