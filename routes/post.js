const { Router } = require("express");
const router = new Router();

const Post = require("./../models/post");

const multerMiddleware = require("./../middleware/multer-configuration");

router.get("/list", async (req, res, next) => {
  try {
    const posts = await Post.find().exec();
    console.log(posts);
    res.json({ posts });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/create",
  multerMiddleware.single("image"),
  async (req, res, next) => {
    // console.log("REQ BODY", req.body);
    // console.log("REQ file", req.file);
    // console.log("USER", req.session.user);

    // const { title, body } = req.body;
    const data = {
      text: req.body.content,
      image: req.file.url,
      _author: req.session.user
    };
    // console.log("DATA BEFORE CREATE", data);

    try {
      const post = await Post.create(data);
      res.json({ post });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).exec();
    res.json({ post });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
