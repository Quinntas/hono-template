import {createMiddleware} from "../../../../lib/middleware.ts";
import {getConnInfo} from "hono/bun";

export const loggerMiddleware = createMiddleware((c, next) => {
    const info = getConnInfo(c);
    const remoteIp = `${info.remote.address}:${info.remote.port}`;
    const method = c.req.method;
    const url = c.req.url;
    const userAgent = c.req.header('user-agent') || '-';
    const timestamp = new Date().toISOString();

    const logEntry = `${remoteIp} - - [${timestamp}] "${method} ${url} ${userAgent}"`;

    console.log(logEntry);

    return next();
});