import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        ignores: ['**/node_modules/**', '.venv/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                // Chrome Built-in AI APIs
                LanguageModel: 'readonly',
                Translator: 'readonly',
                LanguageDetector: 'readonly',
            },
        },
    },
    {
        files: ['eslint.config.js'],
        languageOptions: { globals: globals.node },
    },
];
