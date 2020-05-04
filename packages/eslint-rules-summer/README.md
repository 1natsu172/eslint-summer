# eslint-rules-summer

The never ending summer rules of lint.

## Rules list

- [eslint-rules-summer](#eslint-rules-summer)
  - [Rules list](#rules-list)
    - [no-eqeqeq-null-undefined](#no-eqeqeq-null-undefined)
    - [no-let](#no-let)
    - [no-plain-new-date](#no-plain-new-date)
  - [For developer](#for-developer)

### no-eqeqeq-null-undefined

Do not compare null or undefined with `strict equality(===)` | `strict inequality(!==)`

👍

```javascript
var a = 1
if(a == null) { // something }
if(a != null) { // something }
if(null == a) { // something }
if(null != a) { // something }
if(a == undefined) { // something }
if(a != undefined) { // something }
if(undefined == a) { // something }
if(undefined != a) { // something }
```

🙅‍♂️

```javascript
var a = 1
if(a === null) { // something }
if(a !== null) { // something }
if(null === a) { // something }
if(null !== a) { // something }
if(a === undefined) { // something }
if(a !== undefined) { // something }
if(undefined === a) { // something }
if(undefined !== a) { // something }
```

### no-let

Do not use `let` variable declaration. Use `const` instead.

👍

```javascript
const a = 0
const a = 0,
  b = 1

var a
var a = 0
var a = 0,
  b = 1

export const a = 0
export var a = 0
```

🙅‍♂️

```javascript
let a = 0;
let a = 0,
    b = 1;

export let = 1;
```

### no-plain-new-date

Do not use `new Date()` (empty arguments) | `Date.now()` . Date generation that depends on the execution environment is prohibited.

👍

```javascript
new Date(2020, 4, 3)
new Date('2020-05-03T03:24:00')
```

🙅‍♂️

```javascript
new Date()
Date.now()
```

## For developer

This module is a single rules module, so normally you don't have to consciously install.

If you are developer and want to use this rules module, you can install with the following command.

> npm

```console
$ npm install --save-dev eslint-rules-summer
```

> yarn

```console
$ yarn add -D eslint-rules-summer
```
