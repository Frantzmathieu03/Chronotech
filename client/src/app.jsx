import { Outlet, Link } from 'react-router-dom';

function App() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    gap: '40px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    transition: 'color 0.3s ease',
  };

  const hoverLinkStyle = {
    ...linkStyle,
    color: '#f0f0f0',
  };

  return (
    <>
      <header style={headerStyle}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          Home
        </Link>
        <Link to="/login" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          Login
        </Link>
        <Link to="/signup" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverLinkStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>
          Signup
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
