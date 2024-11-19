import {Hono} from "hono";
import {userCreateController} from "../resources/user.create/user.create.controller.ts";

export const userRouter = new Hono({strict: true}).basePath('/users')

userRouter.post('/', ...userCreateController)