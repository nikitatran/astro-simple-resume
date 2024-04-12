import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";
import { remarkModifiedTime } from './remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: 'https://nikitatran.github.io',
  base: "/astro-simple-resume",
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  }
});