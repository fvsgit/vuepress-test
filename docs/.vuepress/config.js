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
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              children: ['/guide/README.md', '/guide/getting-started.md'],
            },
          ],
          '/reference/': [
            {
              text: 'Reference',
              children: ['/reference/cli.md', '/reference/config.md'],
            },
          ],
        },
    })
}
