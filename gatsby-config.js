/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rochelle Ruen`,
    description: `My work is to facilitate this exploration, guiding you to not only discover, but also embrace and LOVE your true self.`,
    author: `@dinardavis`,
    siteUrl: `https://dinardavis.github.io/donut_miss_out/`,
  },
  pathPrefix: "/rochelle_ruen",
  plugins: [`gatsby-plugin-smoothscroll`, 'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/imgs/favicon.svg',
      },
    },
  ],
}


