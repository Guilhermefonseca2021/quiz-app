import { env } from "process";

export const config = {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    port: 3333
}
