import {type UserInsertModel, userTable} from "./user.table.ts";
import {db} from "../../../infra/database.ts";

export function createUser(data: UserInsertModel) {
    return db.insert(userTable).values(data)
}