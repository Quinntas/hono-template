import {cors} from "hono/cors";
import {csrf} from 'hono/csrf'
import {prettyJSON} from "hono/pretty-json";
import {requestId, type RequestIdVariables} from "hono/request-id";
import {timing, type TimingVariables} from "hono/timing";
import {userRouter} from "../modules/user/application/user.router.ts";
import {createRouter} from "../lib/router.ts";
import {loggerMiddleware} from "../modules/shared/application/middlewares/logger.middleware.ts";

export type Variables = RequestIdVariables & TimingVariables

export const v1Router = createRouter<{ Variables: Variables }>('/api/v1')

v1Router.use(cors())
v1Router.use(csrf())
v1Router.use(prettyJSON())
v1Router.use(requestId())
v1Router.use(timing())
v1Router.use(loggerMiddleware)

v1Router.get("/", (c) => {
    return c.json({
        hello: "world"
    })
})

v1Router.route('/', userRouter)
