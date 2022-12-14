import { Octokit } from "@octokit/core";
import * as dotenv from 'dotenv'
dotenv.config()
const API_key=process.env.Github_Api;
const octokit = new Octokit({ auth: API_key });

const get_username=async function(){
    const response = await octokit.request("GET /user", {
        org: "octokit",
        type: "private",
        });
    return response.data.login;
}

export const getAllRepos= async function (req, res) {
    let username="";
    try{
        if(!req.body.username){
            //when username is not mentioned in the body. get request is made to fing the loginID of the authenticated account
            username=await get_username();
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

export const createRepo = async function(req,res){
    if(!req.body.RepoName){
        console.error("Repo name is not mentioned in the request body ")
		res.status(400).json({msg: `Repo name not mentioned in the request body`});

    }
    const {RepoName,Description,DefaultVisibility}=req.body;
    console.log(`name : ${RepoName} , Description : ${Description} , Visibility : ${DefaultVisibility}`)


    const request_body={
        org: 'ORG',
        name: RepoName,
        'private': true
      }
    if(DefaultVisibility=="public"){
        request_body['private']=false
    }
    if(Description){
        request_body["description"]=Description;
    }
    //creating a repository
    try {
        const k=await octokit.request('POST /user/repos', request_body)
        console.log(`[.]created Repository with name ${RepoName}`);
        res.status(200).json({msg: `Created repository `,parameters : request_body});
    } catch (error) {
        console.log(error.status)
        if(error.status==422)
            res.status(error.status).json({msg: `Repository with the name ${RepoName} already exists`});
        res.status(error.status).json({msg: `Error occured with status code ${error.status}`});
        
    }
  
}
export const getRepo = async function(req,res){
    let username="";
    try{
        if(!req.body.username){
            //when username is not mentioned in the body. get request is made to fing the loginID of the authenticated account
            username=await get_username();
        }
        else
            username=req.body.username;
            
        console.log(`username that was processed is ${username}`)

        if(!req.body.repoName){
		    res.status(400).json({msg: `Repo name not mentioned in the request body`});
        }
        console.log(`Repo name is ${req.body.repoName}`)
        const repo=await octokit.request(`GET /repos/${username}/${req.body.repoName}`, {
            owner: 'OWNER',
            repo: 'REPO'
          })
        res.send(repo.data)
    }catch (err) {
		console.log(err);
        if(err.status==404)
    		res.status(404).json({msg: `Repo not found`});
		res.status(500).json({msg: `Internal Server Error.`});
	}
}
export const Topics = async function(req,res){
    let username="";
    try{
        if(!req.body.username){
            //when username is not mentioned in the body. get request is made to fing the loginID of the authenticated account
            username=await get_username();
        }
        else
            username=req.body.username;
            
        console.log(`username that was processed is ${username}`)

        if(!req.body.repoName){
		    res.status(400).json({msg: `Repo name not mentioned in the request body`});
        }
        console.log(`Repo name is ${req.body.repoName}`)
        const repo=await octokit.request(`GET /repos/${username}/${req.body.repoName}`, {
            owner: 'OWNER',
            repo: 'REPO'
          })
        // res.send(repo.data)
        let method=req.params.method;
        if(method=="list")
          res.send(repo.data.topics)
    if(method=="update"){
        let k =await octokit.request(`PUT /repos/${username}/${req.body.repoName}/topics`, {
            owner: 'OWNER',
            repo: 'REPO',
            names:req.body.updated_topics
          })
          res.status(k.status).json({msg: `Updated topics`, updated_topics : k.data.names});

    }

    if(method=="delete"){
        let k =await octokit.request(`PUT /repos/${username}/${req.body.repoName}/topics`, {
            owner: 'OWNER',
            repo: 'REPO',
            names: []
          })
          res.status(k.status).json({msg: `Deleted all topics`, updated_topics : k.data.names});

    }
    }catch (err) {
		console.log(err);
        if(err.status==404)
    		res.status(404).json({msg: `Repo not found`});
		res.status(500).json({msg: `Internal Server Error.`});
	}
}