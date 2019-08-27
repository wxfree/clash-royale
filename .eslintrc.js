// rules 0/off->关闭规则,1/warn->警告,2/error->提示错误
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'semi': 0,
    'quotes': [2, 'single'],
    'comma-dangle': 2, // 对象文字中的尾随逗号是有效的
    'indent': ['error', 2],
    'no-console': 0,
    'linebreak-style': ["off", "windows"], // windows和macos都能用
  },
};
