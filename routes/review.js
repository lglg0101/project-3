const { Router } = require("express");
const router = new Router();

const Review = require("../models/review");

const multerMiddleware = require("../middleware/multer-configuration");

router.get("/list", async (req, res, next) => {
  try {
    const reviews = await Review.find()
      .populate("_author")
      .sort({ createdAt: -1 })
      .exec();
    console.log(reviews );
    res.json({ reviews  });
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
      const review = await Review.create(data);
      res.json({ review });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

router.patch('/:id', async (req, res, next) => {
  const { text } = req.body;
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
     
      ...(text ? { text } : {})
    }).exec();
    res.json({ review });
  } catch (error) {
    next(error);
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id)
    .populate("_author")
    .sort({ createdAt: -1 })
    .exec();
    res.json({ review });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Review.findByIdAndRemove(req.params.id).exec();
    res.json({});
  } catch (error) {
    next(error);
  }
});

module.exports = router;
