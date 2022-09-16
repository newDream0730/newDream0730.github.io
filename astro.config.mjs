import { defineConfig } from 'astro/config';
<<<<<<< HEAD
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [react()],
  site: 'https://astro-project.netlify.app',
  base: '/gpm-lds-astro',
  clientEntrypoint: '@astrojs/react/client.js',
=======
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		// Enable Preact to support Preact JSX components.
		preact(),
		// Enable React for the Algolia search component.
		react(),
	],
	// renderers: ['@astrojs/renderer-react'],
	site: `https://newDream0730.github.io`,
	// base: '/experiment-astro22H2-lds-react-vlaznim-mustafa'
>>>>>>> f504e447f718a9e93b04b204698361f67bef2abb
});
