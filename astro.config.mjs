import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site:"http://127.0.0.1:5500/dist",
  base:"/"
});