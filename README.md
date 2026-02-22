# FoodShare - Food Waste Reduction Platform

A modern, responsive web application built with React.js that helps reduce food wastage and improve food security by connecting food donors with recipients.

## Features

### Core Pages
- **Home Page**: Hero section with tagline, impact statistics, "How It Works" section, and feature highlights
- **Authentication**: Login and Signup pages with role selection (Donor, Recipient, Admin, Analyst)
- **Donor Dashboard**: Food listing form, donation history, and impact tracker
- **Recipient Dashboard**: Browse and search food listings, request donations, and track requests
- **Admin Panel**: User management, listing verification, and report generation
- **Data Analyst Dashboard**: Interactive charts and analytics with Recharts

### Key Features
- Food listing cards with quantity, location, and expiry information
- Search and category filter functionality
- Notification system display
- Real-time matching system
- Impact tracking with statistics
- Responsive design for mobile and desktop

## Tech Stack

- **Framework**: React.js (JavaScript only, no TypeScript)
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Styling**: Plain CSS with CSS Modules
- **Build Tool**: Vite
- **Data**: Mock data (no backend required)

## Design Theme

- **Colors**: Green (#2d5016, #4a7c2c) and Orange (#ff6b35, #ffa726)
- **Style**: Modern, clean, and eco-friendly
- **Layout**: Card-based design with responsive grid layouts
- **Icons**: Emoji-based icons for simplicity

## Project Structure

```
foodshare/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FoodCard.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── DonorDashboard.jsx
│   │   ├── RecipientDashboard.jsx
│   │   ├── AdminPanel.jsx
│   │   └── AnalystDashboard.jsx
│   ├── contexts/         # React contexts
│   │   └── AuthContext.jsx
│   ├── services/         # Mock data and services
│   │   └── mockData.js
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies

```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. **Sign Up**: Choose your role (Donor, Recipient, Admin, or Analyst)
2. **Donors**: Add food listings with details like quantity, location, and expiry
3. **Recipients**: Browse available food, filter by category, and request donations
4. **Admin**: Manage users and verify food listings
5. **Analysts**: View charts and analytics about platform impact

## Mock Authentication

The application uses mock authentication for demonstration purposes. Any email/password combination will work. The user role is selected during signup/login.

## Responsive Design

The application is fully responsive and works seamlessly on:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)

## Impact Statistics

The platform tracks:
- Total meals saved
- Food rescued (kg)
- CO2 emissions reduced (kg)
- Active users
- Monthly trends and category distribution

## Future Enhancements

- Real backend integration with Supabase
- Real-time notifications
- Map integration for pickup locations
- SMS/Email notifications
- Payment integration for donations
- Mobile app version

## License

This project is created as a college project for demonstration purposes.

## Contributing

This is a college project. Feel free to fork and modify for your own learning purposes.
