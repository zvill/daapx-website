import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DaapX',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?07a7fb48fd2fc06a934923aeaacb7da0";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    colorMode: 'dark', // 'auto' | 'light' | 'dark'
    colorModeSwitch: false,
    // 在这里进行配置
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      // {
      //   text: '指南',
      //   link: '/guide'
      // }
    ],
    sidebar: [
    ]
  }),
})