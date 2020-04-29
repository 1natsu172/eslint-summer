# eslint-rules-summer

The never ending summer rules of lint.

## Rules list

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
