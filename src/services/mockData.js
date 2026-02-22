// Mock data for FoodShare application

export const foodListings = [
  {
    id: 1,
    title: "Fresh Vegetables",
    description: "Surplus fresh vegetables from farm",
    quantity: "50 kg",
    category: "Vegetables",
    location: "Downtown Market, City Center",
    donor: "Green Farms Ltd",
    expiryTime: "2 hours",
    status: "available",
   
  },
  {
    id: 2,
    title: "Bakery Items",
    description: "Fresh bread and pastries from morning batch",
    quantity: "30 items",
    category: "Bakery",
    location: "Main Street Bakery",
    donor: "City Bakery",
    expiryTime: "4 hours",
    status: "available",
   
  },
  {
    id: 3,
    title: "Cooked Meals",
    description: "Pre-packaged nutritious meals",
    quantity: "100 meals",
    category: "Cooked Food",
    location: "Restaurant District",
    donor: "Sunset Restaurant",
    expiryTime: "6 hours",
    status: "available",
    
  },
  {
    id: 4,
    title: "Dairy Products",
    description: "Milk, cheese, and yogurt",
    quantity: "40 units",
    category: "Dairy",
    location: "North Side Supermarket",
    donor: "Daily Dairy Co.",
    expiryTime: "12 hours",
    status: "available",
    
  },
  {
    id: 5,
    title: "Fruits",
    description: "Assorted seasonal fruits",
    quantity: "60 kg",
    category: "Fruits",
    location: "West Market Plaza",
    donor: "Fruit Paradise",
    expiryTime: "8 hours",
    status: "available",
    
  },
  {
    id: 6,
    title: "Canned Goods",
    description: "Non-perishable canned items",
    quantity: "200 cans",
    category: "Canned",
    location: "East Side Warehouse",
    donor: "Mega Mart",
    expiryTime: "24 hours",
    status: "available",
   
  }
];

export const users = [
  {
    id: 1,
    name: "Hindu sri",
    email: "hindu@example.com",
    role: "donor",
    status: "active",
    joinDate: "2024-01-15",
    totalDonations: 45
  },
  {
    id: 2,
    name: "Sanjana",
    email: "sanjana@example.com",
    role: "recipient",
    status: "active",
    joinDate: "2024-02-20",
    totalRequests: 12
  },
  {
    id: 3,
    name: "divya",
    email: "divya@example.com",
    role: "donor",
    status: "active",
    joinDate: "2024-01-10",
    totalDonations: 78
  },
  {
    id: 4,
    name: "Madhuri",
    email: "madhuri@example.com",
    role: "recipient",
    status: "active",
    joinDate: "2024-03-05",
    totalRequests: 8
  }
];

export const donations = [
  {
    id: 1,
    foodItem: "Fresh Vegetables",
    quantity: "50 kg",
    date: "2024-03-15",
    status: "completed",
    recipient: "Hope Foundation"
  },
  {
    id: 2,
    foodItem: "Bakery Items",
    quantity: "30 items",
    date: "2024-03-14",
    status: "completed",
    recipient: "City Shelter"
  },
  {
    id: 3,
    foodItem: "Cooked Meals",
    quantity: "100 meals",
    date: "2024-03-13",
    status: "pending",
    recipient: "Community Center"
  },
  {
    id: 4,
    foodItem: "Dairy Products",
    quantity: "40 units",
    date: "2024-03-12",
    status: "in-transit",
    recipient: "Senior Care Home"
  }
];

export const requests = [
  {
    id: 1,
    foodItem: "Fresh Vegetables",
    quantity: "20 kg",
    date: "2024-03-15",
    status: "approved",
    donor: "Green Farms Ltd"
  },
  {
    id: 2,
    foodItem: "Bakery Items",
    quantity: "15 items",
    date: "2024-03-14",
    status: "pending",
    donor: "City Bakery"
  },
  {
    id: 3,
    foodItem: "Fruits",
    quantity: "30 kg",
    date: "2024-03-13",
    status: "approved",
    donor: "Fruit Paradise"
  }
];

export const analyticsData = {
  monthlyData: [
    { month: "Jan", foodRescued: 450, mealsServed: 1200, wastageReduced: 380 },
    { month: "Feb", foodRescued: 520, mealsServed: 1450, wastageReduced: 430 },
    { month: "Mar", foodRescued: 680, mealsServed: 1850, wastageReduced: 560 },
    { month: "Apr", foodRescued: 750, mealsServed: 2100, wastageReduced: 620 },
    { month: "May", foodRescued: 890, mealsServed: 2400, wastageReduced: 740 },
    { month: "Jun", foodRescued: 920, mealsServed: 2650, wastageReduced: 800 }
  ],
  categoryData: [
    { category: "Vegetables", value: 35 },
    { category: "Fruits", value: 25 },
    { category: "Bakery", value: 15 },
    { category: "Cooked Food", value: 20 },
    { category: "Dairy", value: 5 }
  ],
  impactStats: {
    totalMealsSaved: 12500,
    foodRescued: 4500,
    co2Reduced: 8900,
    activeUsers: 450
  }
};

export const notifications = [
  {
    id: 1,
    message: "Your donation of Fresh Vegetables has been accepted",
    type: "success",
    time: "2 hours ago"
  },
  {
    id: 2,
    message: "New food listing available near you",
    type: "info",
    time: "5 hours ago"
  },
  {
    id: 3,
    message: "Your request for Bakery Items is pending approval",
    type: "warning",
    time: "1 day ago"
  }
];
