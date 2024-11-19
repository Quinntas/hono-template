import {createController} from "../../../../lib/controller.ts";
import {userCreateCommand} from "./user.create.command.ts";
import {zValidator} from "@hono/zod-validator";
import {z} from "zod";

export const userCreateController = createController(
    zValidator(
        'json',
        z.object({
            email: z.string(),
            password: z.string(),
        })
    ),
    async (c) => {
        const validated = c.req.valid('json')

        const res = await userCreateCommand({
            email: validated.email,
            password: validated.password,
        })

        return c.json(res)
    }
)