import { Link } from 'react-router-dom';
import { analyticsData } from '../services/mockData';
import './Home.css';

const Home = () => {
  const { impactStats } = analyticsData;

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Reduce Food Waste, Feed More Lives</h1>
            <p>
              Join our community in the fight against food waste. Connect donors with recipients
              to ensure surplus food reaches those who need it most.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary btn-large">
                Donate Food
              </Link>
              <Link to="/signup" className="btn btn-secondary btn-large">
                Request Food
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🍽️</div>
              <div className="stat-number">{impactStats.totalMealsSaved.toLocaleString()}</div>
              <div className="stat-label">Meals Saved</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-number">{impactStats.foodRescued.toLocaleString()} kg</div>
              <div className="stat-label">Food Rescued</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🌍</div>
              <div className="stat-number">{impactStats.co2Reduced.toLocaleString()} kg</div>
              <div className="stat-label">CO2 Reduced</div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">{impactStats.activeUsers}</div>
              <div className="stat-label">Active Users</div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <p className="section-subtitle">Simple steps to make a difference</p>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Register</h3>
              <p>Sign up as a donor or recipient and join our community</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>List or Browse</h3>
              <p>Donors list surplus food, recipients browse available donations</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Connect</h3>
              <p>Match is made and pickup location is shared</p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Make Impact</h3>
              <p>Food reaches those in need, waste is reduced</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2>Why Choose FoodShare?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-Time Matching</h3>
              <p>Instantly connect donors with nearby recipients for quick food distribution</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>Verified users and secure transactions for peace of mind</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Impact Tracking</h3>
              <p>Monitor your contribution to reducing food waste and helping communities</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Location Based</h3>
              <p>Find food donations in your area with our smart location system</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart Notifications</h3>
              <p>Get notified about new donations and request updates instantly</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access FoodShare anywhere, anytime on any device</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Make a Difference?</h2>
          <p>Join thousands of users fighting food waste and hunger</p>
          <Link to="/signup" className="btn btn-primary btn-large">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
