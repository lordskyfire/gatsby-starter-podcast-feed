module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
'gatsby-plugin-react-helmet',
                {
                        resolve: 'gatsby-source-rss',
                        options: {
                                rssURL: 'https://www.ivoox.com/podcast-1bit-memoria_fg_f1469800_filtro_1.xml'
                        }
                },
],
};