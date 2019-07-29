module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	plugins: ['html'],
	settings: {
		'html/html-extensions': ['.html', '.vue'],
		'html/indent': '+2',
	},
	extends: 'standard',
	env: {
		browser: true,
	}
}
