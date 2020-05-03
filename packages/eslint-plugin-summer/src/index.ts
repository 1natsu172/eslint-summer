import { rules as summerRules } from 'eslint-rules-summer'

const PLUGIN_NAME = 'summer'

/**
 * Defined `eslint-plugin-summer` rules.
 */
export const rules = {
  'no-eqeqeq-null-undefined': summerRules.noEqeqeqNullUndefined,
  'no-let': summerRules.noLet,
}

/**
 * Defined `eslint-plugin-summer` configs.
 */
export const configs = {
  recommended: {
    env: {
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: [PLUGIN_NAME],
    rules: {
      [`${PLUGIN_NAME}/no-eqeqeq-null-undefined`]: 'off',
      [`${PLUGIN_NAME}/no-let`]: 'error',
    },
  },
}
