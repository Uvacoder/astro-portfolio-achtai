import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import image from "@astrojs/image";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), compress()]
});