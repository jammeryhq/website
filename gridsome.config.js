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
    Team: [
      {
        path: '/team/:title',
        component: './src/templates/Team.vue'
      }
    ],
    Starter: [
      {
        name: 'starter',
        path: '/starters/:title',
        component: './src/templates/Starter.vue'
      },
      {
        name: 'starter-guide',
        path: '/guides/starters/:title',
        component: './src/templates/StarterGuide.vue'
      }
    ],
    Plugin: [
      {
        name: 'plugin',
        path: '/plugins/:title',
        component: './src/templates/Plugin.vue'
      },
      {
        name: 'plugin-guide',
        path: '/guides/plugins/:title',
        component: './src/templates/PluginGuide.vue'
      }
    ]
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
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
        refs: {
          guide: 'StarterGuide'
        },
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
        path: 'content/plugins/**/*.md',
        typeName: 'Plugin',
        resolveAbsolutePaths: true,
        refs: {
          guide: 'PluginGuide'
        },
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
        path: 'content/guides/starters/**/*.md',
        typeName: 'StarterGuide',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false }],
            'remark-toc',
            'remark-autolink-headings'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/guides/plugins/**/*.md',
        typeName: 'PluginGuide',
        resolveAbsolutePaths: true,
        remark: {
          plugins: [
            ['gridsome-plugin-remark-shiki', { theme: 'solarized_light', skipInline: false }],
            'remark-toc',
            'remark-autolink-headings'
          ]
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/team/**/*.md',
        typeName: 'Team',
        resolveAbsolutePaths: true
      }
    },
    {
      use: 'gridsome-plugin-segment-js',
      options: {
        prodKey: process.env.GRIDSOME_SEGMENT_KEY_PROD,
        devKey: process.env.GRIDSOME_SEGMENT_KEY_DEV,
        trackPage: true
      }
    },
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
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-youtube', { width: '100%', align: 'auto' }],
        ['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: false }]
      ]
    }
  }
}