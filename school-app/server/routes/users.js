import express from 'express'
import { signup } from "../controller/signup"
import login from "../controller/login"
const router = express.Router();

/* GET users listing. */

router.post('/', async function(req, res, next) {
  const data = req.body
  signup(data)
    .then(() => {
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Credentials", "true")
      res.setHeader("Access-Control-Max-Age", "1800");
      res.setHeader("Access-Control-Allow-Headers", "content-type");
      res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")

      res.status(201).json({
        message: "otp sent to your mail",
        data: data
      });
    })
    .catch((e) => {
      res.status(400).json({ message: e.message });
    });
});

router.post("/login", async function (req, res, next) {
  const data = req.body  
  login(data)
    .then(() => {
      res.status(200).json({
      message: data
    })
    })
    .catch((e) => {
      res.status(400).json({
      message: e
    })
  })
})
export default router;
