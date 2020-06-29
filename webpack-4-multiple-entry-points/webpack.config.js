const path = require('path')

module.exports = {
    entry: {
        index: './src/js/index.js',
        experience: './src/js/experience.js',
        skills: './src/js/skills.js',
        education: './src/js/education.js',
        contact: './src/js/contact.js'
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js'
    }
}