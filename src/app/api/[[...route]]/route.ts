import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({ msg: "Hello world!" });
});

app.get("/projects/:projectid", (c) => {
  const { projectid } = c.req.param();
  return c.json({ projectId: projectid });
});

export const GET = handle(app);
