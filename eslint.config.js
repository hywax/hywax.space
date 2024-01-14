import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
    vue: {
      overrides: {
        'vue/block-order': [
          'error',
          {
            order: ['template', 'script', 'style'],
          },
        ],
        'vue/script-indent': ['error', 2, { baseIndent: 1 }],
        'style/indent': 'off',
      },
    },
    rules: {
      'style/brace-style': ['error', '1tbs'],
      'style/arrow-parens': ['error', 'always'],
      'curly': ['error', 'all'],
      'antfu/consistent-list-newline': 'off',
    },
  },
  {
    ignores: ['.github', '.output', 'dist', 'node_modules'],
  },
)
