module.exports = {
  stories: [
    "../src/Components/LandingPage/Introduction.stories.mdx",
    "../src/Components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
};
