import fetch from 'node-fetch';
import { Octokit } from "@octokit/core";
import * as dotenv from 'dotenv'
dotenv.config()
const API_key=process.env.Github_Api;
const octokit = new Octokit({ auth: API_key });


export const getAllRepos= async function (req, res) {
    let username="";
    try{
        if(!req.body.username){
            //when username is not mentioned in the body. get request is made to fing the loginID of the authenticated account
            const response = await octokit.request("GET /user", {
                org: "octokit",
                type: "private",
                });
            username=response.data.login;
        }
        else
            username=req.body.username;
            
        console.log(`username that was processed is ${username}`)
        const repos_list=await octokit.request(`GET /users/${username}/repos`, {
            org: 'ORG',
            data: undefined
          })
        res.send(repos_list.data)
    }catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
   
}
