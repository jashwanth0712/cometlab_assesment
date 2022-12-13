import express from "express";
import { getAllRepos ,createRepo} from "../controllers/github.js";

const router = express.Router();
// https://api.github.com/users/jashwanth0712/repos
router.get("/", async function (req, res) {
    res.send("recieverd")
});
router.post("/getAllRepos", getAllRepos);
router.post("/createRepo", createRepo);


export default router