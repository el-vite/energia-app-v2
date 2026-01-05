import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
appId: 'com.energiafm.app',
  appName: 'Energía FM',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#0097B2',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false
    }
  }
};

export default config;
