import type {DTO} from "../../../../lib/dto.ts";

export interface UserCreateDTO extends DTO {
    email: string
    password: string
}

export interface UserCreateResponseDTO extends DTO {
    message: 'User created successfully'
}