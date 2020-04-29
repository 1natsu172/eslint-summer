# eslint-rules-summer

The never ending summer rules of lint.

## Rules list

### no-eqeqeq-null-undefined

Do not compare null or undefined with `strict equality`

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
