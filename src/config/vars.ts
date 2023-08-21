const config = {
  apiAccessToken: process.env.ACCESS_TOKEN as string,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT as string,
  host: process.env.NEXT_PUBLIC_HOST as string,

  domain: "https://octalogic.in",

  isLocal: process.env.NEXT_PUBLIC_ENVIRONMENT === "local",
  isStaging: process.env.NEXT_PUBLIC_ENVIRONMENT === "staging",
  isProd: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
};

export default config;
