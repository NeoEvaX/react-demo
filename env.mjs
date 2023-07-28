import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";


export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(),
    DB_USER: z.string(),
    DB_PWD: z.string(),
    DB_NAME: z.string(),
  },
});