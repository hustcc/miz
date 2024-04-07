# miz

> (< 800b) Generate fake / mock structured variable in a modern, human-readable way. Just like a person.
>
> 用一个现代的、可读的方式来生成用于测试的假数据。

[![npm Version](https://img.shields.io/npm/v/miz.svg)](https://www.npmjs.com/package/miz)
[![Build Status](https://github.com/hustcc/miz/workflows/build/badge.svg)](https://github.com/hustcc/miz/actions)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/miz/badge.svg?branch=master)](https://coveralls.io/github/hustcc/miz?branch=master)
[![npm License](https://img.shields.io/npm/l/miz.svg)](https://www.npmjs.com/package/miz)


## Features

⚡️  Simple but highly perfection API  
🐣 Tiny footprint (< 800b)  
👓 Customize  
🎃 3 types of bundles exposed: ESM, CJS and UMD  
🔥 TypeScript Typings readily available  
🎸 Browser and NodeJs supported  
🎯 End-to-end testing with GitHub Action  


## Install

```bash
$ npm i --save miz
```


## Usage

```ts
import { M } from 'miz'; // ES6

const m = M.arrayOf(M.shape({
  id: M.number(10000, 1000000),     	// id is between 10000 ~ 1000000.
  name: M.string(6),                	// 6 length random string.
  sex: M.bool(),                    	// random true or false.
  city: M.constant('hz'),          	 	// constant value.
  work: M.oneOf(['QA', 'FED'])      	// random from array
}), 2);                               // list length is 2.

m.mock();
```

Then will get the mock variable like below:

```ts
[{
	id: 757852,
	name: 'mU7RTB',
	sex: false,
	city: 'hz',
	work: 'FED'
}, {
	id: 359987,
	name: 'jWuKxX',
	sex: true,
	city: 'hz',
	work: 'FED'
}]
```


## API & Mocker

You can assemble the variable structure arbitrarily by **using the mockers** below:

 - **M.bool()**

```ts
M.bool().mock(); // true
```

 - **M.number(min[, max = min, fixed = 0])**

```ts
M.number(1, 9, 2).mock(); // 4.71
```

 - **M.string([len = 8])**

```ts
M.string(6).mock(); // `Qv_teE`
```

- **M.constant(value)**

```ts
M.constant('hello, hustcc.').mock(); // `hello, hustcc`
M.constant(null).mock(); // got null
```

 - **M.oneOf(valueArray)**

```ts
M.oneOf(['hustcc', 'imcxl']).mock(); // hustcc
```

 - **M.arrayOf(mocker[, min = 20, max = min])**

```ts
// got an array which contains string, and array length 10 ~ 20.
M.arrayOf(VT.string(4), 10, 20).mock(); 
```

 - **M.shape(mockerObject)**

```ts
// random value object.
M.shape({
  name: M.string(10),
  id: M.number(10000, 1000000),
  sex: M.bool(),
  city: 'hz',
}).mock();
```
 
 - **M.apply(Function)**

```ts
// will got number generate by fucntion Math.random()
M.apply(() => Math.random()).mock(); 
```

> More `Mocker` needed, welcome to `send a pull request`, or put an issue to me.


## License

ISC@[hustcc](https://github.com/hustcc).
