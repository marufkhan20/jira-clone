import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json");
    console.log("email", email);
    console.log("password", password);
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json");
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    return c.json({ name, email, password });
  });

export default app;
