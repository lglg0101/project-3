const { Router } = require("express");
const router = new Router();
const Post = require("./../models/post");
const multerMiddleware = require("./../middleware/multer-configuration");
router.get("/list", async (req, res, next) => {
  try {
    const posts = await Post.find()
      .populate("_author")
      .sort({ createdAt: -1 })
      .exec();
    //console.log(posts);
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
router.patch('/:id', async (req, res, next) => {
  const { text } = req.body;
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
     
      ...(text ? { text } : {})
    }).exec();
    res.json({ post });
  } catch (error) {
    next(error);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
    .populate("_author")
    .sort({ createdAt: -1 })
    .exec();
    res.json({ post });
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    await Post.findByIdAndRemove(req.params.id).exec();
    res.json({});
  } catch (error) {
    next(error);
  }
});
module.exports = router;