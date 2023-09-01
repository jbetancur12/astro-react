import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site:"https://gentle-cassata-4493a4.netlify.app",
  base:"/"
});