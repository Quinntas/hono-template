import {createController} from "../../../../lib/controller.ts";
import {healthCommand} from "./health.command.ts";

export const healthController = createController(
    (c) => {
        const res = healthCommand()

        return c.json(res)
    }
)