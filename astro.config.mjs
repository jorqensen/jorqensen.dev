import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    experimental: {
        assets: true
    },
    markdown: {
        shikiConfig: {
            theme: "github-dark-dimmed",
            wrap: true
        }
    },
    site: 'https://jorqensen.dev',
    integrations: [tailwind(), sitemap()]
});
