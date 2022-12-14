# cometlab_assesment
Backend assesment submission for cometlab intern role

## List of endpoints
[`/getAllRepos`](https://github.com/jashwanth0712/cometlab_assesment/blob/main/README.md#list-of-endpoints)
[`/createRepo`](https://github.com/jashwanth0712/cometlab_assesment/blob/main/README.md#create-repository)
[`/getRepo`](https://github.com/jashwanth0712/cometlab_assesment/edit/main/README.md#getting-a-single-repo)
[`/Topics`](https://github.com/jashwanth0712/cometlab_assesment/edit/main/README.md#topics)
# Installation
Clone the Repository with 
```
git clone https://github.com/jashwanth0712/cometlab_assesment.git
```
install the npm packages and Run the server
```
cd cometlab_assesment
npm install
```
after Installation of all the required node modules run the server
```
npm start
```
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
## Usage
![ALL repo](https://raw.githubusercontent.com/jashwanth0712/cometlab_assesment/main/images/getAllrepos.png)

# Create Repository
this endpoint creates new Repository in the authticated account
## Route `/createRepo`
### Request Body
   - Repo Name (Required)
   - Repo Description (Optional)
   - Default Visibility (Optional, default is private)
``` 
{
    "RepoName":"Test_Repo",
    "DefaultVisibility":"public",
    "Description":"this is  a test repo"
}
```
## Usage
![create repo](https://raw.githubusercontent.com/jashwanth0712/cometlab_assesment/main/images/createRepo.png)

# getting a single repo
This endpoint returns the requested Repository details
- when `Username` is empty the data from the authenticated user is shown
- `RepoName` is mandaroty
## Usage
![get repo](https://raw.githubusercontent.com/jashwanth0712/cometlab_assesment/main/images/getrepo.png)

# Topics
this endpoint lists, updates and deletes the Topics of a mentioned repository
### API
`/Topics/:method`
* Method can be 
- `list` to list all the topics
- `update` to update the topics array
- `delete` to delete all the topics 
### request body 
```
{
    "repoName":"ambrosia",
    "updated_topics":["sample","comtlab"]
}
```
- `repoName` is a mandatory field
## Usage
![topics](https://raw.githubusercontent.com/jashwanth0712/cometlab_assesment/main/images/topics.png)
