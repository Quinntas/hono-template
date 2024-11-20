import type {DTO} from "../../../../lib/dto.ts";

export type UserCreateDTO = DTO<{
    email: string
    password: string
}>

export type UserCreateResponseDTO = DTO<{
    message: 'User created successfully'
}>