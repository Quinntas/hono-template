import {createCommand} from "../../../../lib/command.ts";
import type {UserCreateDTO, UserCreateResponseDTO} from "./user.create.dto.ts";

export const userCreateCommand = createCommand<UserCreateDTO, UserCreateResponseDTO>(
    async (dto) => {
        console.log(dto)

        return {
            message: 'User created successfully'
        }
    }
)