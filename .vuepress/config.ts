import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'
import navbar from './navbar'
import series from './series'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '为自由献诗',
  description: '这是子十的博客',
  dest: '.vuepress/dist',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: '子十',
    authorAvatar: '/head.jpg',
    lastUpdatedText: '最近更新',
    navbar,
    series,
  }),
})
