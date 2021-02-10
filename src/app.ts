import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { PostsRouter } from "./routes";

mongoose
  .connect("mongodb://localhost:27017/ts_node_mongo", { useNewUrlParser: true })
  .then(() => console.log("database connection success"))
  .catch(() => console.error("database connection failed"));

const app: express.Application = express();

app.use("/api/posts", PostsRouter);

app.get("/", (req: Request, res: Response) =>
  res.sendFile(`${__dirname}/index.html`)
);

app.listen(5000, () => console.log("listening on 5000"));
