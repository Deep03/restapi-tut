import React from 'react';

function LoginComp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    console.log('Submitted:', { username, password });
    // Perform any logic or submit data here
  };

  return (
    <div
      style={{
        margin: '0',
        padding: '0',
        fontFamily: "'Your Preferred Font', sans-serif",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          color: 'red',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          width: '350px',
          textAlign: 'center',
        }}
        className="container"
      >
        <h2 style={{ color: '#333' }}>User Authentication</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }} className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }} htmlFor="username">
              Username:
            </label>
            <input
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }} className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', color: '#555' }} htmlFor="password">
              Password:
            </label>
            <input
              style={{
                width: '100%',
                padding: '8px',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }} className="form-group">
            <button
              style={{
                background: '#4CAF50',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComp;
