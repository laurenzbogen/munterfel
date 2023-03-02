import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine(), tailwind()]
});
