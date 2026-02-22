import { useState } from 'react';
import { donations } from '../services/mockData';
import './DonorDashboard.css';

const DonorDashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    quantity: '',
    category: 'Vegetables',
    location: '',
    expiryTime: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Food listing created successfully!');
    setShowForm(false);
    setFormData({
      title: '',
      description: '',
      quantity: '',
      category: 'Vegetables',
      location: '',
      expiryTime: ''
    });
  };

  const stats = {
    totalDonations: 45,
    activeDonations: 8,
    completedDonations: 37,
    impactScore: 92
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1>Donor Dashboard</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : '+ Add Food Listing'}
          </button>
        </div>

        <div className="dashboard-stats">
          <div className="stat-box">
            <div className="stat-value">{stats.totalDonations}</div>
            <div className="stat-label">Total Donations</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.activeDonations}</div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.completedDonations}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.impactScore}%</div>
            <div className="stat-label">Impact Score</div>
          </div>
        </div>

        {showForm && (
          <div className="form-card">
            <h2>Add New Food Listing</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="title">Food Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Fresh Vegetables"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Cooked Food">Cooked Food</option>
                    <option value="Canned">Canned Goods</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Describe the food items"
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 50 kg or 30 items"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="expiryTime">Available For</label>
                  <input
                    type="text"
                    id="expiryTime"
                    name="expiryTime"
                    value={formData.expiryTime}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 2 hours, 1 day"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Pickup Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Enter pickup address"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Create Listing
              </button>
            </form>
          </div>
        )}

        <div className="section-card">
          <h2>My Donations</h2>
          <div className="donations-table">
            <table>
              <thead>
                <tr>
                  <th>Food Item</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Recipient</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id}>
                    <td>{donation.foodItem}</td>
                    <td>{donation.quantity}</td>
                    <td>{donation.date}</td>
                    <td>{donation.recipient}</td>
                    <td>
                      <span className={`status-badge status-${donation.status}`}>
                        {donation.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="impact-card">
          <h2>Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <span className="impact-icon">🍽️</span>
              <div>
                <div className="impact-number">1,250</div>
                <div className="impact-text">Meals Provided</div>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon">📦</span>
              <div>
                <div className="impact-number">450 kg</div>
                <div className="impact-text">Food Saved</div>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon">🌍</span>
              <div>
                <div className="impact-number">380 kg</div>
                <div className="impact-text">CO2 Reduced</div>
              </div>
            </div>
            <div className="impact-item">
              <span className="impact-icon">❤️</span>
              <div>
                <div className="impact-number">150</div>
                <div className="impact-text">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
