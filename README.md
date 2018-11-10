# MJML 4 in browser

This module packages MJML 4 (https://github.com/mjmlio/mjml) to run in browser. 

It works by mocking some nodejs modules that are not available in a browser. This means several limitations, such as:

- it's not possible to minify output
- mj-include is not supported
- and possibly many more

Nevertheless for the simple use in a webbrowser this works fine.

## Usage example:
```
import mjml2html from "mjml4-in-browser";

const mjml = ...

const result = mjml2html(mjml);
```
