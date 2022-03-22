module.exports = {
  siteMetadata: {
    title: `Martina Tavodova`,
    siteUrl: `https://www.yourdomain.tld`,
    description: ``,
    image: ``,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
