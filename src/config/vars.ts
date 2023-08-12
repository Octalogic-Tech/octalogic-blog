export const NODE_ENV: string = process.env.NODE_ENV;
export const ENVIRONMENT: string = process.env.NEXT_PUBLIC_ENVIRONMENT as string;

export const HOST = process.env.NEXT_PUBLIC_HOST;
export const IS_LIVE: boolean = ENVIRONMENT === "production";
export const OCTALOGIC_DOMAIN = "https://octalogic.in/";
