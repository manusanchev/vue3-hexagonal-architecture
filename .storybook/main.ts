import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    // Import Tailwind CSS v4 plugin dynamically to avoid export issues
    const tailwindcss = await import('@tailwindcss/vite').then(m => m.default);

    return mergeConfig(config, {
      plugins: [tailwindcss()],
    });
  },
};
export default config;
