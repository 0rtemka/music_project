import { randomUUID } from "crypto";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "../frontend/images");
  },
  filename: function (req, res, cb) {
    cb(null, `${randomUUID()}-${Date.now()}` + ".jpg");
  },
});

export const upload = multer({ storage: storage });