import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    if (!user) return '/';
    switch (user.role) {
      case 'donor':
        return '/donor-dashboard';
      case 'recipient':
        return '/recipient-dashboard';
      case 'admin':
        return '/admin-panel';
      case 'analyst':
        return '/analyst-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span className="logo-icon">🍃</span>
          FoodShare
        </Link>

        <div className="navbar-menu">
          <Link to="/" className="nav-link">Home</Link>

          {isAuthenticated ? (
            <>
              <Link to={getDashboardLink()} className="nav-link">Dashboard</Link>
              <span className="nav-user">Hello, {user.name}</span>
              <button onClick={handleLogout} className="btn btn-outline">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
