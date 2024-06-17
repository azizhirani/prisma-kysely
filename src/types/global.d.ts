declare global {
    namespace NodeJS {
      export interface ProcessEnv {
        DB_URL: string;
        EMAIL_FROM: string;
        FRONTEND_URL: string;
        REGION: string;
        SENTRY_DSN: string;
        STAGE: string;
      }
    }
  }
  
  declare module 'fastify' {
    interface FastifyInstance {}
  }
  
  export {};
  