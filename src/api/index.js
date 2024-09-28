export const BASE_URL = 'https://api.github.com';
export const USER_REPOS_ENDPOINT = '/users/oriaderofia327/repos'
export const SPECIFIC_REPO_ENDPOINT = ({repoName, owner}) => `/repos/${owner}/${repoName}`

export async function getAllRepos() {
    const response = await fetch(`https://api.github.com/users/oriaderofia327/repos`);
    const data = await response.json();

    if (response.ok) {
        return data
    }
    throw new Error(`Error fetching data. See details at ${response}`)
}

export async function getSpecificRepo({repoName, owner}) {
    const specificRepoEndpoint = SPECIFIC_REPO_ENDPOINT({repoName, owner});
    const response = await fetch(`${BASE_URL}${specificRepoEndpoint}`);
    const data = await response.json();

    if (response.ok) {
        return data
    }

    throw new Error(`Error fetching data. See details at ${response}`)
}

