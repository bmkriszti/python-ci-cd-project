import React, { useState } from 'react';
import './App.css'
import { UserData } from '../types/UserData';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setUserData(null);

    try {
      const response = await fetch(`http://localhost:5000/api/user-stats/${username}`
      );
  
      if (!response.ok) {
        throw new Error('User not found');
      }
  
      const data: UserData = await response.json();
      setUserData(data);
    }catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Search for a User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <button className="button-55" type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
         <h2>User Details</h2>
          <p>Usernam: {userData.username}</p>
          <p>Name: {userData.name}</p>
          <p>Honor: {userData.honor}</p>
          <p>Clan: {userData.clan}</p>
          <p>Leaderboard Position: {userData.leaderboardPosition}</p>
          
          <h3>Skills:</h3>
          {userData.skills.length > 0 ? (
              <ul>
                {userData.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p>No skills available</p>
            )}

          <h3>Ranks:</h3>
          <p>Overall Rank: {userData.ranks.overall.rank} (Score: {userData.ranks.overall.score})</p>

          <h3>Code Challenges:</h3>
          <p>Total Authored: {userData.codeChallenges.totalAuthored}</p>
          <p>Total Completed: {userData.codeChallenges.totalCompleted}</p>
        </div>
      )}
    </div>
  );
};

export default App;
