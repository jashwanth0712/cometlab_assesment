# cometlab_assesment
Backend assesment submission for cometlab intern role

## List of endpoints
[`/getAllRepos`](List-All-Repos)


# List All Repos
 This end point lists all Repos of a User
## Route `/getAllRepos`
### Request Body
``` 
{
    "username":  "jashwanth0712"
} 
```
## features
- `Username`  is optional
- when `Username` is empty the data from the authenticated user is shown

## API calls used
### get authenticated user login 
```
const response = await octokit.request("GET /user", {
            org: "octokit",
            type: "private",
            });
username=response.data.login;
```

### get  the repositories list of the user

```
    const repos_list=await octokit.request(`GET /users/${username}/repos`, {
        org: 'ORG',
        data: undefined
      })
    res.send(repos_list.data)
```
