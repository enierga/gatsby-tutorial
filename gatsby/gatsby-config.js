import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'Come here to get your slicky slices'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plugin that is being added
      resolve:  'gatsby-source-sanity',
      options: {
        projectId: '86q90s7o',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,

      }
    }
  ]
};