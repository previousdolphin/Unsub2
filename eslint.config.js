import js from '@eslint/js'
import html from 'eslint-plugin-html'
import globals from 'globals'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        THREE: 'readonly',
        html2canvas: 'readonly'
      },
      ecmaVersion: 2021,
      sourceType: 'script'
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error'
    }
  },
  {
    files: ['**/*.html'],
    plugins: {
      html
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        THREE: 'readonly',
        html2canvas: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn'
    }
  }
]