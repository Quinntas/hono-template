import {createCommand} from "../../../../lib/command.ts";
import type {UserCreateDTO, UserCreateResponseDTO} from "./user.create.dto.ts";
import {createUser} from "../../infra/user.repository.ts";

export const userCreateCommand = createCommand<UserCreateDTO, UserCreateResponseDTO>(
    async (dto) => {
        await createUser(dto)

        return {
            message: 'User created successfully'
        }
    }
)