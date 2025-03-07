import express from "express";
const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("User Router Signin");
});

router.post("/api/users/signup", (req, res) => {
  res.send("User Router Signup");
});

router.post("/api/users/signout", (req, res) => {
  res.send("User Router Signout");
});

router.get("/api/users/currentuser", (req, res) => {
  res.send("User Router Current User");
});

export { router as AuthRouter };
