import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// import svgLoader from 'vite-svg-loader';

import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react(), icon()],
  output: 'server',
  // vite: {
  //   plugins: [svgLoader()]
  // },

  content: {
    // Define the schema for your content collection
    schemas: {
      domainsc: {
        type: 'markdown',
        dir: 'content/domainsc',
      },
      
    },
  },
});