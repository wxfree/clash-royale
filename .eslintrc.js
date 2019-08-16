module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off'
    // 'no-unused-vars': 'off'
    // "no-useless-escape":"off"
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
