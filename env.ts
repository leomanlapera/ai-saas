import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
});

export const parsedEnv = envSchema.parse(process.env);
