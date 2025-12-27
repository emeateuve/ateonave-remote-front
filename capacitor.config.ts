import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.miempresa.ateonave',
  appName: 'Ateonave Remote',
  webDir: 'dist/ateonave-remote-front/browser',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
