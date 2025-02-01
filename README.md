# Nothing Special
This repo is mainly for personal use. 
It contains some of the code snippets that I use frequently.

fakerjs is probably more useful.

This is just a minimalistic project.

example usage:
```javascript   
import random from '@awesomeness-js/random';

const randomString = random.string({ minLength: 5, maxLength: 8 });
console.log({randomString});

const randomNumber = random.number({ min: 1, max: 100, places: 3 });
console.log({randomNumber});

const randomInteger = random.integer({ min: 1, max: 100 });
console.log({randomInteger});
```