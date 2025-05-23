import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'the recylery',
  tagline: 'the recyclery logo',
  favicon: 'img/bike.svg',

  // Set the production url of your site here
  url: 'https://the-recyclery.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'the recyclery',
      logo: {
        alt: 'The Recyclery Logo',
        src: 'img/bike.svg',
        href: 'https://the-recyclery.vercel.app/',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'RECY Website',
        },
        {
          href: 'https://github.com/recyclerydisc/documentation-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'RECY Website',
              to: '/docs/intro',
            },         {
              label: 'The Recyclery',
              href: 'https://the-recyclery.vercel.app/',
              position: 'right',
            },
          ],
          
        },
        {
          title: 'Community',
          items: [
            {
              label: 'DISC Website',
              href: 'https://disc-nu.github.io/disc-website/',
            },
            {
              label: 'Github',
              href: 'https://github.com/DISC-NU',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Develop and Innovate for Social Change`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
