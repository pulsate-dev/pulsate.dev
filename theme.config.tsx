import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';

const repositoryURL = 'https://github.com/pulsate-dev/pulsate.dev';

const banner = {
  key: '0.1-release',
  text: (
    <a href="https://github.com/pulsate-dev/pulsate" target="_blank">
      💙 Pulsate 0.1 is out! Read more →
    </a>
  )
};

const themeConfig: DocsThemeConfig = {
  docsRepositoryBase: `${repositoryURL}/edit/main/`,
  darkMode: true,
  banner,
  chat: {
    link: 'https://link.pulsate.dev/discord'
  },
  i18n: [
    { locale: 'ja', text: '日本語' },
    { locale: 'en', text: 'English' }
  ],
  editLink: {
    text: 'Edit this page'
  },
  project: {
    link: 'https://github.com/pulsate-dev/pulsate'
  },
  footer: {
    text: <span>© {new Date().getFullYear()} Pulsate</span>
  },
  toc: {
    backToTop: true
  },
  search: {
    placeholder: 'Search pulsate.dev'
  },
  feedback: {
    content: 'Create a Issue',
    useLink() {
      return `${repositoryURL}/issues/new`;
    }
  },
  logo: (
    <>
      <Image src={'/logo.png'} alt={"Pulsate's logo"} width={40} height={40} />
      <span style={{ marginLeft: '.3em', fontWeight: 500 }}>Pulsate</span>
    </>
  ),
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
      <meta name="theme-color" content="#93B9D7" />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Pulsate Docs'
      };
    } else {
      return {
        titleTemplate: 'Pulsate Docs'
      };
    }
  }
};

export default themeConfig;
