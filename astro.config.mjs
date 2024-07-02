import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  output: "server",
  integrations: [alpinejs()]
});