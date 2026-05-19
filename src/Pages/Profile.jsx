import React from 'react'
import useFetch from '../Custom_hooks/useFetch'
import { useParams } from 'react-router-dom'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const {username} = useParams();
  const navigate = useNavigate();


  const url = `https://api.github.com/users/${username}`
  const {data , loading , error} = useFetch(url);

  console.log(data);


  const handleRepo=()=>{
    navigate(`/user/${username}/repos`)

  }


  if(loading) return <span style={{color: 'blue'}}>Loading Developers Profile....</span>
  
  if(error) return <span style={{color: 'red'}}>Error occured : {error}</span>
  
  if(!data) return null





  return (
<>



    <div className='profile_display'>




      <div className="avatar">
        <img src={data?.avatar_url} alt= 'avatar..' style={{width : '250px', borderRadius : '50%' }} />
      </div>
      <div className="name">
        <h1> {data?.name} </h1>
      </div>
      <div className="content">
        <div className="bio">
          <h3>{data?.bio}</h3>
        </div>

        <div className="id_location">
        <p> <span style={{color : '#58a6ff'}}>Github id</span> : {data?.id}</p>
        <p> <span style={{color : '#58a6ff'}}>Location</span> : {data?.location }</p>
        </div>

        <div className="noofrepos">
          <p> <span style={{color : '#58a6ff'}}>Total Repositories :</span> {data?.public_repos}</p>
        </div>

        <div className="follow">
          <p> <span style={{color : '#238636'}}>Followers  </span> : {data?.followers}</p>
          <p> <span style={{color : '#238636'}}>Following : </span>  {data?.following}</p>
        </div>

        

        <div className="veiwRepository">
          <button onClick={handleRepo}>View Repositories of {username}</button>
        </div>
      </div>


    

      
    </div>

</>
  )
}

export default Profile
