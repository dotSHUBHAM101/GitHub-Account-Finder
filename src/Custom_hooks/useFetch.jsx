import React, { useEffect, useState } from 'react'

function useFetch(url) {


  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');

  useEffect(()=>{

    setLoading(true);

    fetch(url,{
      headers : {

      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`


      }

    })
    .then((response) =>{
      if(!response.ok){
        throw new Error("Failed to Fetch data");
      }
      return response.json();
    })
    .then((result) =>{
      setData(result);
      setLoading(false);
    })
    .catch((err)=>{
      setError(err.message);
      setLoading(false);
    })

  },[url])

  console.log(import.meta.env.VITE_GITHUB_TOKEN)

  return {data , loading , error}
}

export default useFetch;
