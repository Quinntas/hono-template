import {createCommand} from "../../../../lib/command.ts";
import {createUser} from "../../infra/user.repository.ts";
import type {DTO} from "../../../../lib/dto.ts";

export type UserCreateDTO = DTO<{
    email: string
    password: string
}>

export type UserCreateResponseDTO = DTO<{
    message: 'User created successfully'
}>

export const userCreateCommand = createCommand<UserCreateDTO, UserCreateResponseDTO>(
    async (dto) => {
        await createUser(dto)

        return {
            message: 'User created successfully'
        }
    }
)