module.exports = {
    siteMetadata: {
        title: `Амальтея`,
        description: `Обувь оптом от производителя. Большой выбор мужской, женской и детской обуви оптом.`,
        author: `@gsarbaj`,
        siteUrl: `https://amalteya-shoes.ru/`,
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-less`,
            options: {
                javascriptEnabled: true,
            }
        },
        `gatsby-plugin-antd`
    ],
}
