import {createMiddleware} from "../../../../lib/middleware.ts";
import {HTTPException} from "hono/http-exception";
import {decode} from "hono/jwt";
import {getUserWithEmail} from "../../infra/user.repository.ts";

export const authenticationMiddleware = createMiddleware(async (c, next) => {
    const token = c.req.header('Authorization')

    if (!token)
        throw new HTTPException(401, {
            message: 'Authorization header is required'
        })

    const splitToken = token.split(' ')

    if (splitToken.length !== 2)
        throw new HTTPException(401, {
            message: 'Invalid authorization header'
        })

    const [tokenType, tokenValue] = splitToken

    if (tokenType !== 'Bearer')
        throw new HTTPException(401, {
            message: 'Invalid authorization header'
        })

    const {payload} = decode(tokenValue) as { payload: Record<PropertyKey, any> }

    if (!payload.email)
        throw new HTTPException(401, {
            message: 'Invalid authorization header'
        })

    const [user] = await getUserWithEmail(payload.email)

    if (!user)
        throw new HTTPException(401, {
            message: 'Invalid authorization header'
        })

    c.set('user', user)

    return next();
});