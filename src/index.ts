import {app} from "./infra/app.ts";

export default {
    port: 3000,
    fetch: app.fetch
}