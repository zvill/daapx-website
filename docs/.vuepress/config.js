import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DAAPX-数据与应用集成',
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
    // 在这里进行配置
    navbar: [
      {
        text: '指南',
        link: '/guide'
      },
      {
        text: '版本更新',
        link: '/version'
      },
    ],
    sidebar: [
    ]
  }),
})