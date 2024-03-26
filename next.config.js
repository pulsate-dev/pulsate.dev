// @ts-check

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
});

module.exports = {
  ...withNextra({
    i18n: {
      defaultLocale: 'ja',
      locales: ['en', 'ja']
    }
  })
};
