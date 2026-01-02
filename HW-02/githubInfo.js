const axios = require('axios');

async function getUserGit(username)
{
    try
    {
        const usernameResponse = await axios.get(`https://api.github.com/users/${username}`);
        const repositoriesResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        console.log(`Username: ${usernameResponse.data.name}\nRepositories: ${repositoriesResponse.data.length}`);
        // console.log(`Username: ${usernameResponse.data.name}\nRepositories: ${usernameResponse.data.public_repos}`);
    }
    catch(err)
    {
        if(err.response && err.response.status == 404)
        {
            throw new Error("Error: Username not found or wrong URL");
        }
        else 
        {
            throw new Error('Network error or server unreachable');
        }
    }
}

module.exports = getUserGit;