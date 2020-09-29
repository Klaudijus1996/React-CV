const tailwindcss = require('tailwindcss');

module.exports = {
    theme: {
        container: {
            center: true,
        },
    },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './src/App.js',
                './public/index.html',
                './src/Views/*.js',
                './src/Components/*.js'
            ],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}
