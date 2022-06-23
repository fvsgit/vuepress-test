const { defaultTheme } = require('vuepress')

module.exports = {
    lang: 'en-US',
    title: 'Hello, VuePress!',
    description: 'This is my first VuePress site',
    base: '/vuepress-test/',
    theme: defaultTheme({
        // default theme config
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
        ],
    })
}
