import {createCommand} from "../../../../lib/command.ts";
import type {UserLoginDTO, UserLoginResponseDTO} from "./user.login.dto.ts";
import {getUserWithEmail} from "../../infra/user.repository.ts";
import {HTTPException} from "hono/http-exception";
import {Cryptography} from "../../../../lib/cryptography.ts";
import {sign} from "hono/jwt";

export const userLoginCommand = createCommand<UserLoginDTO, UserLoginResponseDTO>(
    async (dto) => {
        const [user] = await getUserWithEmail(dto.email)

        if (!user)
            throw new HTTPException(401, {
                message: 'Invalid email or password'
            })

        if (!Cryptography.compareEncryptedData(user.password, dto.password, process.env.PEPPER!))
            throw new HTTPException(401, {
                message: 'Invalid email or password'
            })

        const expiresIn = 60 * 60 // Expires in 1 hour
        const expiresAt = new Date(Date.now() + expiresIn * 1000)

        const token = await sign({
            email: user.email,
            exp: expiresIn
        }, process.env.JWT_SECRET!, 'HS256')

        return {
            token,
            expiresIn,
            expiresAt
        }
    }
)