import { useState } from 'react';
import { foodListings, requests } from '../services/mockData';
import FoodCard from '../components/FoodCard';
import './RecipientDashboard.css';

const RecipientDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleRequest = (food) => {
    alert(`Request sent for ${food.title}! The donor will be notified.`);
  };

  const filteredListings = foodListings.filter((food) => {
    const matchesSearch = food.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         food.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || food.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    totalRequests: 12,
    approvedRequests: 8,
    pendingRequests: 4,
    mealsReceived: 350
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1>Recipient Dashboard</h1>
        </div>

        <div className="dashboard-stats">
          <div className="stat-box">
            <div className="stat-value">{stats.totalRequests}</div>
            <div className="stat-label">Total Requests</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.approvedRequests}</div>
            <div className="stat-label">Approved</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.pendingRequests}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.mealsReceived}</div>
            <div className="stat-label">Meals Received</div>
          </div>
        </div>

        <div className="section-card">
          <h2>Browse Available Food</h2>

          <div className="filter-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search food items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {['All', 'Vegetables', 'Fruits', 'Bakery', 'Dairy', 'Cooked Food', 'Canned'].map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${categoryFilter === category ? 'active' : ''}`}
                  onClick={() => setCategoryFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="food-grid">
            {filteredListings.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                onRequest={handleRequest}
                showRequestButton={true}
              />
            ))}
          </div>
        </div>

        <div className="section-card">
          <h2>My Requests</h2>
          <div className="requests-table">
            <table>
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Donor</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.foodItem}</td>
                    <td>{request.quantity}</td>
                    <td>{request.date}</td>
                    <td>{request.donor}</td>
                    <td>
                      <span className={`status-badge status-${request.status}`}>
                        {request.status}
                      </span>
                    </td>
                    <td>
                      {request.status === 'approved' && (
                        <button className="btn-small btn-primary">
                          Track
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipientDashboard;
