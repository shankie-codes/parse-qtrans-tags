# parse-qtrans-tags

parse-qtrans-tags is a simple function that tags qTrnaslate-style strings and returns the parsed results. Effectively, it's a hacky JavaScript port of the core string parsing in [qTranslate-x](https://github.com/qTranslate-Team/qtranslate-x). qTranslate-x is a WordPress plugin that allows strings wrapped in language delimiters, stored in the database, to be parsed on the front end and rendered in the language of your choosing.

qTranslate supports a few different types of language delimiters, but we only support the most common-used one: `[:xx]`. For example, if you had a string that contained English and Welsh:

`[:en]Some sample text[:cy]Rhai testun sampl[:]`

This package is really not a fully-developed open-source project. It's a convenience for [Proper Design](https://properdesign.co.uk), who use it internally. We've published it because we think that the idea might be useful, and hope that the community (us included) might develop it into a general-purpose solution. The to-do list below reflects what would need to happen to turn this into a more generally useful package.

## Usage

In our internal usage at Proper Design, we have content stored in our database that contains the language-encoded strings. Then, in our React app, we use the component to render the correct language based on the passed `lang` argument.

```js
import parseQTrans from "parse-qtrans-tags";

parseQTrans("[:en]Some sample text[:cy]Rhai testun sampl[:]", 'en');
```

This then parses the string and returns `Some sample text` if the language is `en`, and `Rhai testun sampl` if the language is `cy`.

## TO-DO

* Re-write the parser in a more JS style. We've pinched the ideas from qTranslate, and as a result, the parsing style is more PHP
* Comprehensive tests

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Build `npm run build`;
