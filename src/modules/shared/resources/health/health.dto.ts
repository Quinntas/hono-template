import type {DTO} from "../../../../lib/dto.ts";

export type HealthDTO = DTO<void>

export type HealthResponseDTO = DTO<{
    uptime: number
    message: 'Ok'
    date: Date
}>