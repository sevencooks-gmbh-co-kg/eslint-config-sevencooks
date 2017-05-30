eslint-config-peerigon
======================
**[SevenCooks](https://sevencooks.com/) coding rules as [eslint](http://eslint.org/) config.**

[![](https://img.shields.io/npm/v/eslint-config-sevencooks.svg)](https://www.npmjs.com/package/eslint-config-sevencooks)
[![](https://img.shields.io/npm/dm/eslint-config-sevencooks.svg)](https://www.npmjs.com/package/eslint-config-sevencooks)
[![Dependency Status](https://david-dm.org/smartfood-gmbh-co-kg/eslint-config-sevencooks.svg)](https://david-dm.org/smartfood-gmbh-co-kg/eslint-config-sevencooks?branch=master)

Provided configs
------------------------------------------------------------------------

### [`sevencooks`](base.js)

**Base rules for every project.**

These rules assume a modern project with full ES2015 support and a module system with a node.js-like resolving behavior (like node.js and webpack).

The base rules do not define an `env`, so you might do that for yourself
in order to enable specific globals.

Add an `.eslintrc.json` to the project's root folder:

```js
{
    "extends": [
        // Base rules for every project
        "sevencooks"
    ],
    "env": {
        // Enable node globals
        "node": true
    },
    // Do not search for further eslint configs in upper directories
    "root": true
}
```

In case you changed the resolving behavior, you can use the [resolvers option](https://github.com/benmosher/eslint-plugin-import#resolvers) of the `eslint-plugin-import`. For instance, if you're using webpack, you just need to install the [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack) module and tell the plugin the location of your `webpack.config.js` like this:

```js
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "config/webpack.config.js"
            }
        }
    },
```

You don't need to do that if you stick to node's/webpack's default resolver.

---

### [`sevencooks/react`](react.js)

Additional rules for [React](https://facebook.github.io/react/) development.
Can also be used in other JSX environments, like [Preact](https://github.com/developit/preact):

```js
{
    "extends": [
        "sevencooks",
        "sevencooks/react"
    ],
    "root": true
}
```

Goals
------------------------------------------------------------------------
Coding rules and coding conventions are always a hot topic because they are very subjective.
However, for the benefit of all team members, it's reasonable to have common rules among projects.

In order to make good decisions, we judge our rules by these features, ordered by priority:

1. Ease of reading
2. Ease of refactoring
3. Ease of writing

Because,<br>
code is read more often than it's changed and<br>
code is changed more often than it's written.

---

Since the "ease of reading" tends to be very subjective again, we should stick to well-known typography rules:

### Avoid long lines

```
This line is very hard to follow because it is very long. The human eye is not used to follow a straight line for so long that's why it feels more comfortable to have some line breaks in between
```

### Avoid unbalanced lines

```
The following two lines look a little bit strange because the first one has a lot of text and is very long while the second
is short.
```

### Use horizontal whitespace

```
this=is+hard-to;read-because/we,can't,distinguish&tokens
andLongVariableNamesAreHardToReadBecauseCamelCaseHasNoWhitespace
```

### Don't use too much vertical whitespace

```
This is a line with some text in it, and after that


There is


another


blank


line and than

another blank link and again
```

### Avoid unnecessary characters

```
(yes) = {we: (are)}, (programmersWhoAreUsedToReadThis - but);

this = is ? nicer : to(read);
```

### Repeat familiar patterns and stay consistent

```
it =is distracting  {to :use } { whitespaces}= inconsistently .
```

---

We should also take into account that code is different than regular paragraphs of text. That's why there are also other concerns, like the following:

### A change should be as atomic as possible

That's why this

```javascript
let a = 1;            let a = 1;
let bb = 2;     >>    const bb = 2;
let ccc = 3;          let ccc = 3;

// one line changed
```

is better than that

```javascript
let a   = 1,          let   a   = 1,
    bbb = 2,    >>          cc  = 3;
    cc  = 3;          const bbb = 3;

// three lines changed
```

If I don't have to change a lot of lines, refactoring is more fun. As a nice side-effect, `git diff` also becomes more readable.

Recommendations
------------------------------------------------------------------------

### Disabling rules

Sometimes, there is a legitimate use-case to disable a specific rule. You can disable a rule for the current line like this

```js
// eslint-disable-line rule-code
```

where `rule-code` is the code that is displayed along the error message.

In rare cases, it makes sense to disable a rule for the whole project. For instance, if you work with JSON data coming from a foregin API that uses underscore property names.

If you don't agree with a rule, please do not just disable the rule. It's better to create an issue here in order to discuss the pros and cons of a rule.

### Should I apply `--fix` as part of my `posttest` script?

**No**. Because this way, eslint won't report all linting errors on Travis CI. Thus, a PR could contain linting errors without Travis CI complaining about it.

License
------------------------------------------------------------------------

Unlicense

Based on the Peerigon ESLint config
------------------------------------------------------------------------

[<img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" />](https://github.com/peerigon/eslint-config-peerigon)
