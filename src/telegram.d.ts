// telegram.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        headerColor: string;
        initData: string;
        initDataUnsafe: object;
        themeParams: object;
      };
    };
  }
}