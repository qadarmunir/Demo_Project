 const { defineConfig } = require("cypress");
module.exports = {
projectId: "1h6z5j",
  retries: {
    experimentalStrategy: 'detect-flake-and-pass-on-threshold',
    experimentalOptions: {
      maxRetries: 2,
      passesRequired: 1,
    },

    // you must also explicitly set openMode and runMode to
    // either true or false when using experimental retries
    openMode: false,
    runMode: false,
  },
  // projectId: 'iz6rmd',
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,
  viewportWidth: 1900,
  viewportHeight: 1000,
  // Viewport settings overridden for component tests // random used is 1000/660
  component: { //only for component testing
    viewportWidth: 1980,
    viewportHeight: 1920,
  },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 25000,
    "baseUrl": "https://www.perfectform.com/",
     slowTestThreshold : 10000,
     pageLoadTimeout: 50000,
     requestTimeout: 5000,
     video:false,
     responseTimeout: 5000,
     // failOnStatusCode: true,
     reporter: 'mochawesome',
     numTestsKeptInMemory: 0,
     testIsolation: true,
  
},
};
// }
