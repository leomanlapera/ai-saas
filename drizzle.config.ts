import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { parsedEnv } from "./env";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: parsedEnv.DATABASE_URL,
  },
});
