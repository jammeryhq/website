module.exports = {
  siteName: 'JammeryHQ',
  siteUrl: 'https://jammeryhq.com',
  titleTemplate: '%s - JammeryHQ',
  siteDescription: 'Fast-track your JAMstack development & learning',
  icon: 'src/favicon.png',
  resolveAbsolutePaths: false,
  permalinks: {
    trailingSlash: false
  },
  templates: {
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ],
    Starter: [
      {
        path: '/starters/:title',
        component: './src/templates/Starter.vue'
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
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/**/*.md',
        typeName: 'Post',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/starters/**/*.md',
        typeName: 'Starter',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }]
          ]
        }
      }
    },
    // {
    //   use: 'gridsome-plugin-segment-js',
    //   options: {
    //     prodKey: process.env.GRIDSOME_SEGMENT_KEY_PROD,
    //     devKey: process.env.GRIDSOME_SEGMENT_KEY_DEV,
    //     trackPage: true
    //   }
    // },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#000000',
        icon_path: './src/favicon.png',
        name: 'JammeryHQ',
        short_name: 'JammeryHQ',
        theme_color: '#000000',
        lang: 'en'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer']
    }
  }
}
