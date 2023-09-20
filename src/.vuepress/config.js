import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'DaapX',
  base: '/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/logo.svg', type: 'image/x-icon', sizes: '16x16' }],
    // ['script', {}, `var _hmt = _hmt || [];
    // (function() {
    //   var hm = document.createElement("script");
    //   hm.src = "https://hm.baidu.com/hm.js?07a7fb48fd2fc06a934923aeaacb7da0";
    //   var s = document.getElementsByTagName("script")[0]; 
    //   s.parentNode.insertBefore(hm, s);
    // })();`],
    ['script', {}, `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-PN2XN2KG');
    `],
    ['script', {}, `
    (function(d,t) {
      var BASE_URL="https://chatroom.console.onlcy.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g,s);
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'VzDqjg5roFwHEaY7Hv96NrWT',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
    `]

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