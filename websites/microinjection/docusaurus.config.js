// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microinjection',
  tagline: 'An IoC container for build better Node.js applications.',
  url: 'https://microinjection.microkits.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microkits', // Usually your GitHub org/user name.
  projectName: 'microinjection', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      pt: {
        label: 'Português (BR)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('@packages/design/css/custom.css'),
        },
        sitemap: {
          changefreq: 'monthly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{ name: 'keywords', content: 'dependency, inversion, javascript, typescript, nodejs, ioc, container, inversion, control' }],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        logo: {
          alt: 'An inversion of the control container to build better Node.js applications.',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/overview',
            position: 'right',
            label: 'Docs',
          },
          {
            to: 'faq',
            label: 'FAQ',
            position: 'right'
          },
          {
            href: 'https://github.com/microkits/microinjection',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/microinjection',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/microkits/microinjection',
              },
            ]
          }
        ]
      },
      prism: {
        theme: require('./src/themes/dark')
      },
    }),
};

module.exports = config;
