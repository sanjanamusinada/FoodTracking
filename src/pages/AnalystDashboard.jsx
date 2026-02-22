import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { analyticsData } from '../services/mockData';
import './AnalystDashboard.css';

const AnalystDashboard = () => {
  const { monthlyData, categoryData, impactStats } = analyticsData;

  const COLORS = ['#2d5016', '#4a7c2c', '#ff6b35', '#ffa726', '#66bb6a'];

  return (
    <div className="dashboard-container">
      <div className="container">
        <div className="dashboard-header">
          <h1>Data Analytics Dashboard</h1>
        </div>

        <div className="dashboard-stats">
          <div className="stat-box">
            <div className="stat-value">{impactStats.totalMealsSaved.toLocaleString()}</div>
            <div className="stat-label">Total Meals Saved</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{impactStats.foodRescued.toLocaleString()} kg</div>
            <div className="stat-label">Food Rescued</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{impactStats.co2Reduced.toLocaleString()} kg</div>
            <div className="stat-label">CO2 Reduced</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{impactStats.activeUsers}</div>
            <div className="stat-label">Active Users</div>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3>Monthly Food Waste Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="foodRescued"
                  stroke="#2d5016"
                  strokeWidth={3}
                  name="Food Rescued (kg)"
                />
                <Line
                  type="monotone"
                  dataKey="mealsServed"
                  stroke="#ff6b35"
                  strokeWidth={3}
                  name="Meals Served"
                />
                <Line
                  type="monotone"
                  dataKey="wastageReduced"
                  stroke="#4a7c2c"
                  strokeWidth={3}
                  name="Wastage Reduced (kg)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Food Category Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card chart-full">
            <h3>Monthly Comparison - Bar Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="foodRescued" fill="#2d5016" name="Food Rescued (kg)" />
                <Bar dataKey="mealsServed" fill="#ff6b35" name="Meals Served" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="insights-section">
          <h2>Key Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">📈</div>
              <h3>Growth Trend</h3>
              <p>Food rescue operations have increased by 105% over the last 6 months, showing strong platform adoption.</p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🥬</div>
              <h3>Top Category</h3>
              <p>Vegetables account for 35% of all donations, making it the most donated food category.</p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">⏰</div>
              <h3>Peak Hours</h3>
              <p>Most donations occur between 6-9 PM, coinciding with restaurant closing times.</p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🌍</div>
              <h3>Environmental Impact</h3>
              <p>Our platform has prevented 8,900 kg of CO2 emissions by reducing food waste.</p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">👥</div>
              <h3>User Engagement</h3>
              <p>Active user base has grown to 450 users with 85% monthly retention rate.</p>
            </div>

            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <h3>Success Rate</h3>
              <p>92% of listed donations successfully reach recipients within 24 hours.</p>
            </div>
          </div>
        </div>

        <div className="section-card">
          <h2>Export Reports</h2>
          <div className="export-options">
            <button className="btn btn-primary">
              📊 Download Monthly Report (PDF)
            </button>
            <button className="btn btn-primary">
              📈 Export Analytics Data (CSV)
            </button>
            <button className="btn btn-primary">
              📉 Generate Impact Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalystDashboard;
