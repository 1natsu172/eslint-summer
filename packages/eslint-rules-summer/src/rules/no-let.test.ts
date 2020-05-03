import { RuleTester } from 'eslint'

import { noLet } from './no-let'

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
})

const error: RuleTester.TestCaseError = {
  messageId: 'banLet',
}

tester.run('no-let', noLet, {
  valid: [
    `const a = 0;`,

    `const a = 0,
           b = 1;`,

    `const a = 0;
     const b = 1;`,

    `export const a = 0;`,

    `var a;`,

    `var a,
         b;`,

    `var a = 0;`,

    `var a = 0,
         b = 1;`,

    `var a = 0;
     const b = 1;`,

    `export var a = 0;`,
  ],
  invalid: [
    {
      code: `let a;`,
      errors: [error],
    },
    {
      code: `
        let a,
            b;
      `,
      errors: [error],
    },
    {
      code: `let a = 0`,
      errors: [error],
    },
    {
      code: `
        let a = 0,
            b = 1;
      `,
      errors: [error],
    },
    {
      code: `
        let a = 0;
        let b = 1;
      `,
      errors: [error, error],
    },
    {
      code: `
        export let a = 0;
      `,
      errors: [error],
    },
    {
      code: `
        const a = 1
        let b = 0;
      `,
      errors: [error],
    },
  ],
})
