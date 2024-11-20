import type {DTO} from "../../../../lib/dto.ts";

export type UserLoginDTO = DTO<{
    email: string
    password: string
}>

export type UserLoginResponseDTO = DTO<{
    token: string
    expiresIn: number
    expiresAt: Date
}>