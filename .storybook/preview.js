import { ChakraProvider } from "@chakra-ui/react";

const { theme } = require("../styles/styles");

export const parameters = {
  chakra: {
    theme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];
