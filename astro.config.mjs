import { defineConfig } from 'astro/config';
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
});
