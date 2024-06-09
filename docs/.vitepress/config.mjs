import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LingFenglong",
  description: "personal documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '笔记',
        items: [
          { text: 'Java', link: '/server-side/Java' },
          { text: 'Spring', link: '/server-side/Spring' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lingfenglong' }
    ]
  }
})
