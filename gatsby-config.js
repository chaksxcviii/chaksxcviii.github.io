module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Shaquil Maria's Portfolio Website, made with Gatsby, React-Icons & Tailwindcss`,
    author: `@chaksxcviii`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-tailwindcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
  ],
}
