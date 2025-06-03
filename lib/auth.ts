import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import * as schema from "@/db/schema";
import { parsedEnv } from "@/env";

export const auth = betterAuth({
  socialProviders: {
    github: {
      clientId: parsedEnv.GITHUB_CLIENT_ID,
      clientSecret: parsedEnv.GITHUB_CLIENT_SECRET,
    },
    google: {
      clientId: parsedEnv.GOOGLE_CLIENT_ID,
      clientSecret: parsedEnv.GOOGLE_CLIENT_SECRET,
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    },
  }),
});
