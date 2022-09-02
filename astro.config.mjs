import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import compress from "astro-compress";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), compress(), preact()]
});