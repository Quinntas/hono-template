import {v1Router} from "./router.ts";
import {createRouter} from "../lib/router.ts";

export const app = createRouter()

app.notFound((c) => c.text('Not Found', 404))

app.onError((err, c) => {
    return c.text(err.message, 500)
})

app.route('/', v1Router)