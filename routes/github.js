import express from "express";
import { getAllRepos ,createRepo,getRepo,Topics,getAllReposwithcondition,getUser} from "../controllers/github.js";
const message={
    "msg":"list of API endpoints",
    "Endpoints":{
        "post methods":[
            "https://cometlab-assesment.vercel.app/getAllRepos",
            "https://cometlab-assesment.vercel.app/createRepo",
            "https://cometlab-assesment.vercel.app/getRepo",
            "https://cometlab-assesment.vercel.app/Topics/:method"
        ]
    }
}
const router = express.Router();
// https://api.github.com/users/jashwanth0712/repos
router.get("/", async function (req, res) {
    res.send(message)
});
router.post("/", async function (req, res) {
    res.send(message)
});
router.post("/getAllRepos", getAllRepos);
router.post("/getUser", getUser);
router.post("/getAllRepos/:forks/:stars", getAllReposwithcondition);
router.post("/createRepo", createRepo);
router.post("/getRepo", getRepo)
router.post("/Topics/:method",Topics)
// Default route
router.post("*", (req, res) => {
    res.send("PAGE NOT FOUND");
  });
router.get("*", (req, res) => {
    res.send("PAGE NOT FOUND");
  });
        
export default router