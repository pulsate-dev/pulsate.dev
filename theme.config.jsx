import Image from 'next/image';
import { useRouter } from 'next/router';

const repositoryURL = 'https://github.com/pulsate-dev/pulsate.dev';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  logo: (
    <>
      <Image src={'/logo.png'} alt={"Pulsate's logo"} width={50} height={50} />
      <span style={{ marginLeft: '.4em', fontWeight: 500 }}>Pulsate</span>
    </>
  ),
  docsRepositoryBase: `${repositoryURL}/edit/main/packages/docs/`,
  primaryHue: 193,
  i18n: [
    { locale: 'ja', text: '日本語' },
    { locale: 'en', text: 'English' }
  ],
  project: {
    link: repositoryURL
  },
  search: {
    placeholder: 'Search pulsate.dev...'
  },
  editLink: {
    text: 'Edit this page'
  },
  feedback: {
    content: 'Create a Issue',
    useLink() {
      return `${repositoryURL}/issues/new`;
    }
  },
  footer: {
    text: (
      <span>© {new Date().getFullYear()} Pulsate. All rights reserved.</span>
    )
  },
  head: (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Pulsate Docs'
      };
    }
  }
};

export default themeConfig;
