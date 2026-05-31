import React, { useState, useEffect } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate = useNavigate();
  const [query, setQuery] = useState('');
  
  
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('github_search_history');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('github_search_history', JSON.stringify(history));
  }, [history]);

  const HandleGitHub = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    
    if (!trimmedQuery) return;

    
    const newItem = {
      id: Date.now(), 
      text: trimmedQuery
    };

    setHistory(prev => [newItem, ...prev]); 
    setQuery('');
    
    navigate(`/user/${trimmedQuery}`);
  };


  const removeHistoryItem = (idToDelete) => {
    setHistory(prev => prev.filter(item => item.id !== idToDelete));
  };

  return (
    <div className='homepage'>
      <div className="intro">
        <h2>Find any GitHub account:</h2>
      </div>
      <div className="inputbar">
        <form onSubmit={HandleGitHub}>
          
          <input 
            type="text" 
            value={query} 
            placeholder='Enter a GitHub username ex (dotSHUBHAM101)...' 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button type='submit'>Get</button>
        </form>

        {history.length > 0 && <h3>Search History:</h3>}
        <ol>
          {history.map((curr) => (
            <li key={curr.id} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            
              <p 
                onClick={() => navigate(`/user/${curr.text}`)} 
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                {curr.text}
              </p>
              <button 
                onClick={() => removeHistoryItem(curr.id)}
                style={{ color: 'red', cursor: 'pointer', }}
              >
                ❌
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Home;

