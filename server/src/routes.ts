import express from "express";
import db from "./database/connection";

const routes = express.Router();

routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

  const insertUsersIds = await db("users").insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id = insertUsersIds[0];

  const insertClassesIds = await db("classes").insert({
    subject,
    cost,
    user_id,
  });

  const class_id = insertClassesIds[0];

  return response.send();
});

export default routes;
