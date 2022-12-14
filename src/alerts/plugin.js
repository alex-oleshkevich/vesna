const jss = require('jss');
const preset = require('jss-preset-default');
const plugin = require('tailwindcss/plugin');
const styles = require('./styles.css');

jss.setup(preset())
;
const { classes } = jss.createStyleSheet(styles).attach();

// console.log(classes);

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({});
});
