import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkModifiedTime } from './remark-modified-time.mjs';
import siteInfo from './src/resume_sections/site_info.json';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: siteInfo.domainName,
  base: siteInfo.basePath,
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  }
});