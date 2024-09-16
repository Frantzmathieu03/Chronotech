// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <header>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
    </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
