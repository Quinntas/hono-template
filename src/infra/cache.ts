import {Redis} from "../bin/redis.ts";

export const cache = new Redis(process.env.REDIS_URL!)