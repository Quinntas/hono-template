import {createCommand} from "../../../../lib/command.ts";
import type {DTO} from "../../../../lib/dto.ts";

export type HealthResponseDTO = DTO<{
    uptime: number
    message: 'Ok'
    date: Date
}>

export const healthCommand = createCommand<void, HealthResponseDTO>(
    () => {
        return {
            uptime: process.uptime(),
            message: 'Ok',
            date: new Date(),
        }
    }
)