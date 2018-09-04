module.exports = {
  extends: 'originate/react',
  parser: 'babel-eslint',
  plugins: [
    'flowtype'
  ],
  rules: {
    "flowtype/define-flow-type": 1,
    'arrow-body-style': ['error', 'as-needed'],
    'flowtype/define-flow-type': 1,
    'react/sort-comp': [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }]
  },
  globals: {
    chrome: true,
  },
  overrides: [
    {
      files: ['src/mocks/**/*.js', 'src/**/*.test.js'],
      env: {
        jest: true
      },
    }
  ]
}