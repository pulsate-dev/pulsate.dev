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
