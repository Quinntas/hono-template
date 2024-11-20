import {createController} from "../../../../lib/controller.ts";
import {zValidator} from "@hono/zod-validator";
import {z} from "zod";
import {userLoginCommand} from "./user.login.command.ts";

export const userLoginController = createController(
    zValidator(
        'json',
        z.object({
            email: z.string(),
            password: z.string(),
        })
    ),
    async (c) => {
        const validated = c.req.valid('json')

        const res = await userLoginCommand({
            email: validated.email,
            password: validated.password,
        })

        return c.json(res)
    }
)