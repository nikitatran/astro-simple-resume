import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://nikitatran.github.io",
  base: "/astro-simple-resume",
  integrations: [tailwind(), icon()]
});