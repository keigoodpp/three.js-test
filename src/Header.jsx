import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#f5f5f5', padding: '10px 0' }}>
      <div style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0 }}>My App</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '10px' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;