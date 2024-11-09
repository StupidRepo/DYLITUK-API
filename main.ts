import { Application } from "jsr:@oak/oak/application";
import { myInstantsRouter } from "./routers/myinstants.ts";

const app = new Application();
app.use(myInstantsRouter.routes());
app.use(myInstantsRouter.allowedMethods());

app.listen({ port: 2024 });