# What to draw

## Meta information
* This is the random description generator inspired by https://whattodraw.virink.com
* Can be used as a real draw suggestion or as a fake string generator
* All suggestion rights belong to https://whattodraw.virink.com creators
* *Warning*: some suggestions could be **NSFW**. Author is **not responsible** for this!

## Type
CommonJS module for better compatibility

# How to use
* Import whattodraw module:
```javascript
const whatToDraw = require('whattodraw'); // CommonJS syntax
// or
import whatToDraw from 'whattodraw'; // ES6 module syntax
```

* Call `whatToDraw()` instance:
```javascript
whatToDraw();
```
* This function accept one optional parameter - items (how many suggestions should be returned), e.g.:
```javascript
whatToDraw(5); // ['suggestion1', ..., 'suggestion5']
```
* Parameter could not be NaN type or less than 1

# Author
(c) Ilya Soloveychik, 2021