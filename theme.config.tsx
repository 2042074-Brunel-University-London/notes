import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Uni Notes</span>,
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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Uni Notes" />
      <meta property="og:description" content="Collection of notes and docs" />
    </>
  ),
  search: {
    placeholder: "Search notes..."
  },
  footer: {
    component: ({ menu }) => (<></>)
  },
}

export default config
