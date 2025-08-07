import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myApp',
  webDir: 'www',
  server: {
    "allowNavigation": [
      "localhost:8100/"
    ],
    cleartext: true,
    androidScheme: 'http'
  }
};

export default config;
