# webpack as part of the workflow in Questback R&D Nordic

Presentation will be available at [megoth.github.io/qb-webpack-intro](http://megoth.github.io/qb-webpack-intro/).

Uses [reveal.js](https://github.com/hakimel/reveal.js/) as presentation tool, [Jade](http://jade-lang.com/) as template engine, [less-fixed](https://github.com/ForbesLindesay/less-fixed) to compile [Less](http://lesscss.org/) to CSS, and of course [webpack](https://webpack.github.io/) to bundle JS-files.

To build the presentation, use the following commands:

```
jade app/index.jade -o . // for building the HTML file
less-fixed app/index.less index.css // for building the CSS
webpack // for building the JS
```