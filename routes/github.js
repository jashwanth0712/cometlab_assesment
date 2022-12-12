import express from "express";
import { getAllRepos } from "../controllers/github.js";

const router = express.Router();
// https://api.github.com/users/jashwanth0712/repos
router.get("/", async function (req, res) {
    res.send("recieverd")
});
router.post("/getAllRepos/", getAllRepos);

export default router