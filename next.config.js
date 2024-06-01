// @ts-check
const { withKumaUI } = require('@kuma-ui/next-plugin');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'ja',
    locales: ['en', 'ja']
  }
};

module.exports = {
  ...withNextra(
    withKumaUI(nextConfig, {
      outputDir: './.kuma'
    })
  )
};

module.exports = withKumaUI(withNextra(nextConfig), {
  wasm: true
});
