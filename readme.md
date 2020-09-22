
×
Congrats on completing activity 'Implement Object Shorthand'!
Publishing Lotide To npm
Lotide Assignment
35 minutes
 Status
Incomplete
Wow... We've built a library of functions that we or other developers could actually use in other projects! This is great, but how will these other projects actually import our library?

Much like with Mocha, Chai, Chalk and other packages on npm, we can package up and publish our Lotide library to the public npm registry. In this activity, we'll be doing just that. Exciting!

Creating An NPM Account
In order to publish our package to npm, we first need an account on their website. More details on this can be found here.

Create an NPM account.

Sign up link: https://www.npmjs.com/signup

Your username is important, and we suggest keeping it professional (though it doesn't have to be your name or initials, etc. either).

Verify your email.

As they say:

You must verify your email address in order to publish packages to the registry.

Logging In To NPM From Vagrant
We can now log in using these credentials.

Log into npm from the command line.

In our Vagrant machine, run the npm login command from any directory. Follow the prompts to login successfully.

Having A README.md File
Before we publish our package, there's some best practices housekeeping that we need to follow first.

We need a README.md file. The readme file explains to other developers what this library is for, how to install it, and how to use it.

Create a README.md file within the root of your project (lotide) folder.

Paste the following template into README.md.

README Template
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @saadxislam/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `function1(head)`: find the first element of an array
* `function2(tail)`: return the last elements of the array except for head
* `function3(without)`: return array "without" the passed params
* `function4(takeUntil)`: Return an array until a condition is met
* `function5(middle)`: if even numbered array, return middle 2 elems, if odd, then middle elem
* `function6(map)`: returns the single elements asked for in an array
* `function7(letterPositions)`: description
* `function8(findKeyByValue)`: description
* `function9(findKey)`: description
* `function10(eqObjects)`: description
* `function11(eqArrays)`: description
* `function12(countOnly)`: description
* `function13(countLetters)`: description