import {createCommand} from "../../../../lib/command.ts";
import type {HealthDTO, HealthResponseDTO} from "./health.dto.ts";

export const healthCommand = createCommand<HealthDTO, HealthResponseDTO>(
    () => {
        return {
            uptime: process.uptime(),
            message: 'Ok',
            date: new Date(),
        }
    }
)