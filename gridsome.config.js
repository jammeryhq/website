module.exports = {
  siteName: 'JammeryHQ',
  siteUrl: "https://jammeryhq.com",
  titleTemplate: "%s - JammeryHQ",
  siteDescription: "",
  icon: 'src/favicon.png',
  resolveAbsolutePaths: false,
  permalinks: {
    trailingSlash: false,
  },
  prefetch: {
    mask: '^$',
  },
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: [],
          whitelistPatterns: [],
          whitelistPatternsChildren: []
        },
        presetEnvConfig: {
            features: {
              'nesting-rules': true
            }
        },
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/**/*.md",
        typeName: "Post",
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
          ]
        }
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  },
}
