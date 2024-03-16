module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	root: true,
	extends: ['@lisandra-dev/eslint-config', 'prettier'],
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
		quotes: ['error', 'single', { avoidEscape: true }],
	},
};
