import express, { Request, Response } from "express";
import { Post } from "../models";

const PostsRouter: express.Router = express.Router();

PostsRouter.post("", express.urlencoded(), (req: Request, res: Response) => {
  const post = new Post({ title: req.body.title, body: req.body.body });
  post
    .save()
    .then(() =>
      res.status(201).json({ status: "success", message: "post saved" })
    );
});

PostsRouter.get("", (req: Request, res: Response) => {
  Post.find().then((docs) =>
    res.status(201).json({ status: "success", data: docs })
  );
});

export default PostsRouter;
