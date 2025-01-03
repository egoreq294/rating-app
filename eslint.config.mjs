import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/typescript', 'prettier'],
    plugins: ['simple-import-sort'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^/?'],
            [
              '^(@app|@shared|@entities|@features|@pages|@widgets)+',
              '^\\.\\.?',
            ],
            [
              '^(@app|@shared|@entities|@features|@pages|@widgets|.).+\\s?css$',
              '^\\.s?css?',
            ],
          ],
        },
      ],
    },
  }),
];

export default eslintConfig;
