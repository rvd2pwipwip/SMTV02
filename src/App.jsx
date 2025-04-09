import React from 'react';
import './styles/App.css';

function App() {
  return (
    <div className="app bg-surface">
      <header className="app-header">
        <h1 className="text-primary">SMTV</h1>
        <p className="text-secondary">Smart Music TV</p>
      </header>
      <main className="app-main">
        <div className="card m-md">
          <h2 className="text-primary">Welcome to your TV Music Experience</h2>
          <p className="text-secondary">Use your remote to navigate through the app</p>
        </div>
      </main>
    </div>
  );
}

export default App; 