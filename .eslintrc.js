module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		babelOptions: {
			configFile: './babel.config.json',
		},
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'google'],
	rules: {
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'guard-for-in': 0,
	},
};
