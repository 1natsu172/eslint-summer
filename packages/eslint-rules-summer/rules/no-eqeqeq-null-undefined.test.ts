import { RuleTester } from 'eslint'

import { noEqeqeqNullUndefined } from './no-eqeqeq-null-undefined'

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } })

const wantedEqEqEq = { expectedOperator: '===', actualOperator: '==' }
const wantedNotEqEq = { expectedOperator: '!==', actualOperator: '!=' }
const wantedEqEq = { expectedOperator: '==', actualOperator: '===' }
const wantedNotEq = { expectedOperator: '!=', actualOperator: '!==' }

tester.run('no-eqeqeq-null-undefined', noEqeqeqNullUndefined, {
  valid: [
    { code: `foo == undefined` },
    { code: `foo == null` },
    { code: `undefined == foo` },
    { code: `null == foo` },
    { code: `foo != undefined` },
    { code: `foo != null` },
    { code: `undefined != foo` },
    { code: `null != foo` },
    { code: `null == null` },
    { code: `null != null` },
    { code: `undefined == undefined` },
    { code: `undefined != undefined` },
    { code: `true === true` },
    { code: `'hello' === 'hello'` },
    { code: `0 === 0` },
    { code: `typeof foo == undefined` },
    { code: `typeof foo === string` },
    { code: `'undefined' === 'undefined'` },
    { code: `'null' === 'null'` },
    { code: `'undefined' == undefined` },
    { code: `'null' == null` },
  ],
  invalid: [
    {
      code: `foo === undefined`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `foo === null`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `undefined === foo`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `null === foo`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `foo !== undefined`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
    {
      code: `foo !== null`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
    {
      code: `undefined !== foo`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
    {
      code: `null !== foo`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
    {
      code: `'null' === null`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `'null' !== null`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
    {
      code: `undefined === undefined`,
      errors: [{ messageId: 'unexpected', data: wantedEqEq }],
    },
    {
      code: `undefined !== undefined`,
      errors: [{ messageId: 'unexpected', data: wantedNotEq }],
    },
  ],
})
