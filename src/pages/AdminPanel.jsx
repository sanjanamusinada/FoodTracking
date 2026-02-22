import { useState } from 'react';
import { users, foodListings } from '../services/mockData';
import './AdminPanel.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('users');

  const stats = {
    totalUsers: 450,
    totalDonors: 280,
    totalRecipients: 150,
    pendingVerifications: 12
  };

  const handleVerifyListing = (id) => {
    alert(`Food listing ${id} verified successfully!`);
  };

  const handleVerifyUser = (id) => {
    alert(`User ${id} verified successfully!`);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      alert(`User ${id} deleted successfully!`);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1>Admin Panel</h1>
        </div>

        <div className="dashboard-stats">
          <div className="stat-box">
            <div className="stat-value">{stats.totalUsers}</div>
            <div className="stat-label">Total Users</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.totalDonors}</div>
            <div className="stat-label">Donors</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.totalRecipients}</div>
            <div className="stat-label">Recipients</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{stats.pendingVerifications}</div>
            <div className="stat-label">Pending Verifications</div>
          </div>
        </div>

        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            Manage Users
          </button>
          <button
            className={`tab-btn ${activeTab === 'listings' ? 'active' : ''}`}
            onClick={() => setActiveTab('listings')}
          >
            Verify Listings
          </button>
          <button
            className={`tab-btn ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            Reports
          </button>
        </div>

        <div className="section-card">
          {activeTab === 'users' && (
            <>
              <h2>User Management</h2>
              <div className="admin-table">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Join Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <span className="role-badge">{user.role}</span>
                        </td>
                        <td>
                          <span className={`status-badge status-${user.status}`}>
                            {user.status}
                          </span>
                        </td>
                        <td>{user.joinDate}</td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="btn-small btn-success"
                              onClick={() => handleVerifyUser(user.id)}
                            >
                              Verify
                            </button>
                            <button
                              className="btn-small btn-danger"
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'listings' && (
            <>
              <h2>Verify Food Listings</h2>
              <div className="listings-grid">
                {foodListings.map((listing) => (
                  <div key={listing.id} className="listing-card">
                    
                    <div className="listing-content">
                      <h3>{listing.title}</h3>
                      <p>{listing.description}</p>
                      <div className="listing-details">
                        <span>📦 {listing.quantity}</span>
                        <span>📍 {listing.location}</span>
                      </div>
                      <div className="listing-actions">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleVerifyListing(listing.id)}
                        >
                          Approve
                        </button>
                        <button className="btn btn-outline">Reject</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'reports' && (
            <>
              <h2>System Reports</h2>
              <div className="reports-grid">
                <div className="report-card">
                  <h3>User Activity Report</h3>
                  <p>Track user engagement and activity patterns</p>
                  <button className="btn btn-primary">Generate Report</button>
                </div>
                <div className="report-card">
                  <h3>Donation Statistics</h3>
                  <p>Analyze donation trends and patterns</p>
                  <button className="btn btn-primary">Generate Report</button>
                </div>
                <div className="report-card">
                  <h3>Impact Analysis</h3>
                  <p>Measure the overall impact on food waste reduction</p>
                  <button className="btn btn-primary">Generate Report</button>
                </div>
                <div className="report-card">
                  <h3>Financial Overview</h3>
                  <p>Review platform operational metrics</p>
                  <button className="btn btn-primary">Generate Report</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
