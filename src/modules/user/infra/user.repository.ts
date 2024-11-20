import {type UserInsertModel, userTable} from "./user.table.ts";
import {db} from "../../../infra/database.ts";
import {cache} from "../../../infra/cache.ts";
import {eq} from "drizzle-orm";

export function createUser(data: UserInsertModel) {
    return db.insert(userTable).values(data)
}

export function getUserWithEmail(email: string) {
    return cache.it(
        `user:email:${email}`,
        () => db.select().from(userTable).where(eq(userTable.email, email)),
    )
}