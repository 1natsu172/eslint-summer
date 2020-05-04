import { RuleTester } from 'eslint'

import { noPlainNewDate } from './no-plain-new-date'

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
})

const error = (data: any): RuleTester.TestCaseError => ({
  messageId: 'noPlainNewDate',
  data,
})

tester.run('no-plain-new-date', noPlainNewDate, {
  valid: [
    `new Date(2020,4,3)`,
    `const now = new Date(2020,4,3)`,
    `new Date('2020-05-03T03:24:00')`,
    `const now = new Date('2020-05-03T03:24:00')`,
  ],
  invalid: [
    {
      code: `new Date()`,
      errors: [error({ actualOperator: 'new Date()' })],
    },
    {
      code: `const now = new Date()`,
      errors: [error({ actualOperator: 'new Date()' })],
    },
    {
      code: `Date.now()`,
      errors: [error({ actualOperator: 'Date.now()' })],
    },
    {
      code: `const now = Date.now()`,
      errors: [error({ actualOperator: 'Date.now()' })],
    },
  ],
})
