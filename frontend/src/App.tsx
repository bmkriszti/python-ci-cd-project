// src/App.tsx
import React, { useState } from 'react';

interface UserData {
  username: string;
  data: {
    [key: string]: any;
  };
}

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    setUserData(null);

    try {
      const response = await fetch(`http://localhost:5000/api/user-stats/${username}`, {
        method: 'GET',  
        headers: {
          'Content-Type': 'application/json',  
        },
      });
  
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
        <button type="submit">Search</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <h2>User Details</h2>
          <p>Username: {userData.username}</p>
          <pre>{JSON.stringify(userData.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
