import { defineConfig } from 'astro/config';
import alpine from '@astrojs/alpinejs';
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

Alpine.plugin(intersect)

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine(), tailwind()]
});