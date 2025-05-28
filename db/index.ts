import { parsedEnv } from "@/env";
import { drizzle } from "drizzle-orm/neon-http";

export const db = drizzle(parsedEnv.DATABASE_URL);
