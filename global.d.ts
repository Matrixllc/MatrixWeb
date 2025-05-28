// global.d.ts 或者 next-env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
    NEXT_PUBLIC_EMAILJS_USER_ID: string;
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:string;
    NEXT_PUBLIC_EMAILJS_PRIVATE_KEY:string;
  }
}
