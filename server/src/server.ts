import express from "express";

const app = express();

app.get("/users", (request, response) => {
  return response.json([{ User: "Vitor" }]);
});

app.listen(3333);
