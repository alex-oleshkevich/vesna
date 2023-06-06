const defaultColors = require("tailwindcss/colors");

module.exports = {
    content: ["demo/**/*.html", "./js/**/*.ts"],
    plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
    theme: {
        extend: {
            colors: {
                accent: defaultColors.blue,
            },
        },
    },
};
