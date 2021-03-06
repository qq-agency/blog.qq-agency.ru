module.exports = {
  title: 'QQ',
  description: 'Блог агентства QQ',

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Кейсы',
        link: '/cases/',
      },
      {
        text: '1С-Битрикс',
        link: '/bitrix/',
      },
      {
        text: 'Наш сайт',
        link: 'https://qq-agency.ru',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/qq-agency',
      },
    ],
    sidebar: {
      '/cases/': [
        {
          title: 'Кейсы',
          collapsable: false,
          children: [
            'qq-agency',
            'selcab',
            'neodent.md',
            'lang-school',
          ],
        },
      ],
      '/bitrix/': [
        {
          title: '1С-Битрикс',
          collapsable: false,
          children: [
            'third-party-components',
          ],
        },
      ],
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'metrika',
      {
        counter: '69476659',
        config: {
          accurateTrackBounce: true,
          clickmap: true,
          trackLinks: true,
          webvisor: true,
        },
      },
    ],
  ],
};
