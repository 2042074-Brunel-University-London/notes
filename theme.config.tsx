import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/asobirov/uni-docs',
  },
  chat: {
    link: 'https://discord.gg',
  },
  docsRepositoryBase: 'https://github.com/asobirov/uni-docs',
  useNextSeoProps: () => ({
    titleTemplate: '%s – Uni Docs',
  }),
  search: {
    placeholder: "Search notes..."
  },
  footer: {
    component: ({ menu }) => (<></>)
  },
}

export default config
