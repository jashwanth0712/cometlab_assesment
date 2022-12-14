# cometlab_assesment
Backend assesment submission for cometlab intern role

## List of endpoints
[`/getAllRepos`](https://github.com/jashwanth0712/cometlab_assesment/blob/main/README.md#list-of-endpoints)
[`/creareRepo`](https://github.com/jashwanth0712/cometlab_assesment/blob/main/README.md#create-repository)
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
