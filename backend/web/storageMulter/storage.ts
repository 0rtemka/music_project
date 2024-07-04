import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../images");
  },
  filename: function (req, res, cb) {
    cb(null, `${Date.now()}` + ".jpg");
  },
});

export const upload = multer({ storage: storage });