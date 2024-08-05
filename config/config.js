import dotenv from 'dotenv';
import { createClient } from "@libsql/client";


dotenv.config();

export const port = process.env.PORT;

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});
