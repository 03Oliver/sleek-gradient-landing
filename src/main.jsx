import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, Global } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

// Add global styles for link hover effects
const theme = extendTheme({ 
  colors,
  styles: {
    global: {
      // Add consistent link hover animation
      'a:not([class])': {
        position: 'relative',
        textDecoration: 'none',
        _after: {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: '1px',
          bottom: 0,
          left: 0,
          backgroundColor: 'currentColor',
          transformOrigin: 'bottom right',
          transition: 'transform 0.25s ease-out'
        },
        _hover: {
          _after: {
            transform: 'scaleX(1)',
            transformOrigin: 'bottom left'
          }
        }
      }
    }
  }
});

// Add meta tags
const metaTags = [
  { name: 'description', content: 'collective.vc - an early-stage climate-syndicate & media organisation' },
  { property: 'og:title', content: 'collective.vc' },
  { property: 'og:description', content: 'An early-stage climate-syndicate & media organisation led by Oliver Bonallack' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://collective.vc' },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: 'collective.vc' },
  { name: 'twitter:description', content: 'An early-stage climate-syndicate & media organisation led by Oliver Bonallack' }
];

// Add meta tags to document head
metaTags.forEach(({ name, property, content }) => {
  const meta = document.createElement('meta');
  if (name) meta.name = name;
  if (property) meta.property = property;
  meta.content = content;
  document.head.appendChild(meta);
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);