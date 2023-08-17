// Listing 3-23: Using a Custom Hook

import './App.css' ;
import useGitHubRepos from 'useGitHubRepos' ;

function App() {
    const [repos, isLoading] = useGitHubRepos('facebook') ;
    const reposList = repos.map( (repo, index) => (
        <li key={index}>
            <a href={repo.clone_url}>{repo.name}</a>
        </li>
    )) ;

    return <div>{isLoading ? 'Loading...' : reposList}</div> ;
}