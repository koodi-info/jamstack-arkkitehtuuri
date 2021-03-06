// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Koodi.info - Jamstack arkkitehtuuri',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'Posts',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
