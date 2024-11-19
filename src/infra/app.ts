import {Hono} from 'hono'
import {v1Router} from "./router.ts";

export const app = new Hono({strict: true})

app.notFound((c) => c.text('Not Found', 404))

app.onError((err, c) => {
    return c.text(err.message, 500)
})

app.route('/', v1Router)