import express from 'express'
import { signup } from "../controller/signup"

const router = express.Router();

/* GET users listing. */

router.post('/', async function(req, res, next) {
  const data = req.body
  signup(data)
    .then(() => {
      res.status(201).json({
        message: "otp sent to your mail",
        data: data
      });
    })
    .catch((e) => {
      res.status(400).json({ message: e.message });
    });
});

export default router;
