import {userCreateController} from "../resources/user.create/user.create.controller.ts";
import {createRouter} from "../../../lib/router.ts";
import type {Variables} from "../../../infra/router.ts";
import {userLoginController} from "../resources/user.login/user.login.controller.ts";

export const userRouter = createRouter<{ Variables: Variables }>('/users')

userRouter.post('/', ...userCreateController)

userRouter.post('/login', ...userLoginController)