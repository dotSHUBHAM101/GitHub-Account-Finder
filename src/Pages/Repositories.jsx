import React from 'react'
import './Repositories.css'
import useFetch from '../Custom_hooks/useFetch'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Repositories() {

  const {username} = useParams();

  const repo_url = `https://api.github.com/users/${username}/repos`;

  const url = `https://api.github.com/users/${username}`

  const {data : repoData , loading : repoLoading , error : repoError} = useFetch(repo_url);

  const {data : userData , loading : userLoading , error : userError} = useFetch(url);

  console.log(repoData);

  if(!username){
    return <p>Please search a user first..</p>
  }

  if(userLoading || repoLoading ) return <p style={{color : 'blue', background : 'white'}}>Loading {username} Repositories..</p>
  if(userError || repoError ) return <p style={{color : 'red'}}>Error occured :  {userError} Repositories..</p>
  if(!repoData || !userData) return null



  return (
    <div className='repoPage'>
      <div className="basicKnowledge">
        <h1>{username} Has - {userData?.public_repos} Repositories</h1>
      </div>

      <div className="repobox">
        {repoData.map((repo , index) => (
          <div className="repoInfo" key={index}>
                  <div className="main_content_Git">
                    <h2><span style={{color : 'green'}}>{repo.name}</span> | ⭐  {repo.stargazers_count}  🍴  {repo.forks}</h2>
                    <p className='repo_description'>{repo.description}</p>
                  <span className="language-tag">
                      <span className="lang-dot"></span>
                        {repo.language || 'Unknown'}
                  </span>
                    <div className="repos_url">

                    <a href={repo.clone_url} target='_blank'>
                      
                      <button>REPOS  URL</button>
                    </a>
                    </div>
                    
                
                    

                  </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Repositories
