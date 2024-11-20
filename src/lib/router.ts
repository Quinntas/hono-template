import {Hono} from "hono";

import type {BlankEnv} from "hono/types";


export function createRouter<T extends BlankEnv = BlankEnv>(basePath: string = '/') {
    return new Hono<T>({strict: true}).basePath(basePath)
}