# 🌾 HarvestHub

> **A Modern Agricultural Marketplace Platform**

HarvestHub is a comprehensive digital platform connecting farmers and agricultural sellers with buyers, facilitating direct trade of fresh agricultural products with location-based delivery services and AI-powered crop recommendations.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-7.4-green)
![Express](https://img.shields.io/badge/Express-4.18-black)

---

## 🚀 Live Demo

**Frontend**: [HarvestHub Platform](https://your-deployed-url.com)  
**API**: [API Documentation](https://your-api-url.com)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Installation](#-installation)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

---

## ✨ Features

### 🔐 **Authentication & Authorization**
- **Dual User System**: Separate authentication for buyers (users) and sellers
- **Email Verification**: Secure account verification with email confirmation
- **JWT Token Authentication**: Stateless authentication with expiring tokens
- **Password Security**: Bcrypt hashing for secure password storage
- **Role-based Access Control**: Different permissions for users and sellers

### 🛒 **Marketplace Operations**
- **Product Management**: Complete CRUD operations for agricultural products
- **Multi-Category Support**: 8 product categories (Rice, Wheat, Nuts, Sugar, Spices, Fruits, Vegetables, Pulses)
- **Image Upload**: Cloudinary integration for product image management
- **Inventory Tracking**: Real-time stock quantity management
- **Smart Search**: Category-based product discovery

### 📍 **Location-Based Services**
- **Geographic Product Filtering**: Find products within delivery radius
- **Coordinate-based Delivery**: Precise location tracking using GeoJSON Point format
- **Distance Calculation**: Haversine formula for accurate distance computation
- **Delivery Radius Management**: Sellers can set custom delivery zones
- **Interactive Maps**: Leaflet integration for location selection

### 📦 **Order Management**
- **Multi-Product Orders**: Support for batch ordering
- **Real-time Inventory Updates**: Automatic stock reduction on order placement
- **Order Tracking**: Complete order history for sellers and buyers
- **Location-based Orders**: Orders include delivery coordinates
- **Order Analytics**: Sales data with location insights

### ⭐ **Review & Rating System**
- **Product Reviews**: Star-based rating system (1-5 stars)
- **Review Management**: Paginated review display
- **Unique Reviews**: One review per user per product constraint
- **Review Analytics**: Helps sellers improve product quality

### ❓ **FAQ System**
- **Product-specific Q&A**: Buyers can ask product-related questions
- **Seller Response System**: Sellers can answer customer queries
- **Email Notifications**: Automated notifications when questions are answered
- **FAQ Management**: Organized question-answer management

### 📊 **Analytics & Reporting**
- **Sales Analytics**: Date-wise sales tracking
- **Category Performance**: Category-wise sales analysis
- **Visual Charts**: Recharts integration for data visualization
- **Seller Dashboard**: Comprehensive business insights

### 🤖 **AI-Powered Features**
- **Crop Prediction**: AI-based crop recommendations using Google Gemini AI
- **Environmental Analysis**: Crop suggestions based on:
  - Soil type analysis
  - Altitude considerations
  - Temperature patterns
  - Humidity levels
  - Rainfall data
- **Detailed Recommendations**: Primary crops, secondary options, risk factors
- **Agricultural Consulting**: Expert-level crop selection guidance

### 🔄 **Real-time Features**
- **WebSocket Integration**: Real-time stock updates using Socket.IO
- **Live Inventory**: Instant stock change notifications
- **Real-time Dashboard**: Live updates for seller dashboards

### 📧 **Communication System**
- **Email Notifications**: Nodemailer integration for transactional emails
- **Account Verification**: Automated verification emails
- **Order Confirmations**: Email notifications for order updates
- **FAQ Responses**: Email alerts when questions are answered

---

## 🛠 Tech Stack

### **Backend**
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18
- **Database**: MongoDB 7.4 with Mongoose ODM
- **Authentication**: JWT + bcrypt
- **File Upload**: Multer + Cloudinary
- **Email Service**: Nodemailer with Gmail SMTP
- **Real-time**: Socket.IO for WebSocket connections
- **AI Integration**: Google Generative AI (Gemini)

### **Frontend**
- **Framework**: React 18.2 with Vite
- **State Management**: Redux Toolkit + Redux Persist
- **Styling**: Tailwind CSS 3.3
- **Maps**: React Leaflet + Leaflet GeoSearch
- **Charts**: Recharts for data visualization
- **HTTP Client**: Axios
- **Routing**: React Router Dom 6.15
- **UI Components**: React Icons, React Spinners, React Toastify

### **Development & Deployment**
- **Build Tool**: Vite 5.2
- **Package Manager**: npm
- **Deployment**: Render.com
- **Version Control**: Git
- **Environment**: dotenv for environment variables

---

## 🏗 System Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   React Client  │    │   Express API    │    │   MongoDB       │
│                 │    │                  │    │                 │
│ • Redux Store   │◄──►│ • REST Endpoints │◄──►│ • Products      │
│ • Leaflet Maps  │    │ • JWT Auth       │    │ • Users/Sellers │
│ • Real-time UI  │    │ • WebSocket      │    │ • Orders        │
│                 │    │ • File Upload    │    │ • Reviews/FAQs  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌────────▼────────┐              │
         │              │  External APIs  │              │
         └──────────────┤                 │──────────────┘
                        │ • Cloudinary    │
                        │ • Gmail SMTP    │
                        │ • Google AI     │
                        └─────────────────┘
```

---

## 📦 Installation

### **Prerequisites**
- Node.js 18.0.0 or higher
- MongoDB database (local or cloud)
- Gmail account for email services
- Cloudinary account for image hosting
- Google AI API key for crop predictions

### **Clone Repository**
```bash
git clone https://github.com/ParthA164/HarvestHub.git
cd HarvestHub
```

### **Environment Setup**
Create `.env` files in the server directory:

```bash
# server/.env
PORT=10000
MONGODB_URI=mongodb://localhost:27017/harvesthub
JWT_SECRET=your_jwt_secret_key_here
GMAIL_ID=your_gmail_address
APP_PASSWORD=your_gmail_app_password
EMAIL=your_sender_email
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
GEMINI_API_KEY=your_google_ai_api_key
```

### **Install Dependencies & Run**

#### **Development Mode**
```bash
# Install all dependencies
npm install

# Run client (port 5173)
npm run dev:client

# Run server (port 10000)
npm run dev:server
```

#### **Production Mode**
```bash
# Build and start production server
npm run build
npm start
```

---

## 📚 API Documentation

### **Authentication Endpoints**

#### Register User/Seller
```http
POST /auth/{type}/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "contact": 1234567890,
  "password": "securepassword",
  "brandName": "Farm Fresh" // Only for sellers
}
```

#### Login
```http
POST /auth/{type}/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Verify Account
```http
PATCH /auth/{type}/verify/{token}
```

### **Product Management**

#### Create Product
```http
POST /products
Authorization: Bearer {seller_token}
Content-Type: multipart/form-data

{
  "name": "Organic Wheat",
  "category": "wheat",
  "description": "Premium quality organic wheat",
  "pricePerUnit": 45.50,
  "measuringUnit": "kg",
  "minimumOrderQuantity": 10,
  "quantity": 1000,
  "shelfLife": "6 months",
  "deliveryRadius": 25,
  "location": {
    "type": "Point",
    "coordinates": [77.2090, 28.6139]
  },
  "image": [file]
}
```

#### Get Products by Category
```http
GET /products/category/{category}/{longitude}/{latitude}
?page=1&products_per_page=10
```

#### Update Product
```http
PUT /products/{productId}
Authorization: Bearer {seller_token}
Content-Type: multipart/form-data
```

#### Delete Product
```http
DELETE /products/{productId}
Authorization: Bearer {seller_token}
```

### **Order Management**

#### Place Order
```http
POST /order
Authorization: Bearer {user_token}
Content-Type: application/json

[
  {
    "productId": "product_id_here",
    "sellerId": "seller_id_here",
    "orderQty": 25,
    "orderLocation": {
      "type": "Point",
      "coordinates": [77.2090, 28.6139]
    }
  }
]
```

#### Get Seller Orders
```http
GET /order/seller
Authorization: Bearer {seller_token}
```

### **Review System**

#### Add Review
```http
POST /reviews/{productId}
Authorization: Bearer {user_token}
Content-Type: application/json

{
  "stars": 4,
  "heading": "Great quality wheat!",
  "description": "Excellent product with fast delivery"
}
```

#### Get Product Reviews
```http
GET /reviews/{productId}
?page=1&review_per_page=5
```

### **FAQ System**

#### Ask Question
```http
POST /faqs/{productId}
Authorization: Bearer {user_token}
Content-Type: application/json

{
  "question": "What is the moisture content?",
  "sellerId": "seller_id_here"
}
```

#### Answer Question
```http
PUT /faqs/{faqId}/answer
Authorization: Bearer {seller_token}
Content-Type: application/json

{
  "answer": "The moisture content is below 12%"
}
```

#### Get Product FAQs
```http
GET /faqs/product/{productId}
?page=1&faq_per_page=5
```

### **Analytics**

#### Get Sales Analytics
```http
GET /graph
Authorization: Bearer {seller_token}
```

### **AI Crop Prediction**

#### Get Crop Recommendations
```http
GET /ai/predict-crops
?soil=loamy&altitude=0.5&temperature=25&humidity=60&rainfall=800
```

---

## 🗃 Database Schema

### **Users Collection**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  contact: Number (required, unique),
  password: String (required, hashed),
  isVerified: Boolean (default: false),
  verificationToken: String,
  verificationTokenExpiry: Date,
  date: Date (default: Date.now)
}
```

### **Sellers Collection**
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required, unique),
  contact: Number (required, unique),
  password: String (required, hashed),
  brandName: String (required, unique),
  isVerified: Boolean (default: false),
  verificationToken: String,
  verificationTokenExpiry: Date,
  date: Date (default: Date.now)
}
```

### **Products Collection**
```javascript
{
  _id: ObjectId,
  image: String (required, Cloudinary URL),
  brand: String (required),
  name: String (required),
  category: String (required, enum: categories),
  description: String (required),
  pricePerUnit: Number (required),
  measuringUnit: String (required),
  minimumOrderQuantity: Number (required),
  deliveryRadius: Number (required),
  location: {
    type: String (enum: ['Point']),
    coordinates: [Number] // [longitude, latitude]
  },
  quantity: Number (required),
  shelfLife: String (required),
  sellerId: ObjectId (ref: 'sellers'),
  date: Date (default: Date.now)
}
```

### **Orders Collection**
```javascript
{
  _id: ObjectId,
  productId: ObjectId (ref: 'products'),
  userId: ObjectId (ref: 'users'),
  sellerId: ObjectId (ref: 'sellers'),
  orderQty: Number (required),
  orderLocation: {
    type: String (enum: ['Point']),
    coordinates: [Number] // [longitude, latitude]
  },
  date: Date (default: Date.now)
}
```

### **Reviews Collection**
```javascript
{
  _id: ObjectId,
  userId: ObjectId (ref: 'users'),
  productId: ObjectId (ref: 'products'),
  stars: Number (required, 1-5),
  heading: String (required),
  description: String (required),
  date: Date (default: Date.now)
}
// Unique index: userId + productId
```

### **FAQs Collection**
```javascript
{
  _id: ObjectId,
  question: String (required),
  answer: String,
  isAnswered: Boolean (default: false),
  productId: ObjectId (ref: 'products'),
  sellerId: ObjectId (ref: 'sellers'),
  userId: ObjectId (ref: 'users'),
  date: Date (default: Date.now)
}
// Unique index: productId + sellerId + userId
```

---

## 🔧 Environment Variables

### **Server Environment (.env)**
```env
# Server Configuration
PORT=10000
NODE_ENV=production

# Database
MONGODB_URI=mongodb://localhost:27017/harvesthub

# Authentication
JWT_SECRET=your_super_secret_jwt_key_min_32_chars

# Email Service (Gmail SMTP)
GMAIL_ID=your_gmail_address@gmail.com
APP_PASSWORD=your_gmail_app_specific_password
EMAIL=noreply@harvesthub.com

# Cloudinary (Image Upload)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Google AI (Crop Prediction)
GEMINI_API_KEY=your_google_generative_ai_api_key
```

### **Setup Instructions**

1. **MongoDB**: Set up MongoDB Atlas or local MongoDB instance
2. **Gmail SMTP**: Enable 2FA and create app-specific password
3. **Cloudinary**: Create account and get API credentials
4. **Google AI**: Get API key from Google AI Studio

---

## 🚀 Deployment

### **Render.com Deployment**

The project is configured for Render.com deployment with the included `render.yaml`:

```yaml
# render.yaml
npm run build
npm start
NODE_VERSION=18
```

#### **Deployment Steps**
1. Fork this repository
2. Connect to Render.com
3. Set environment variables in Render dashboard
4. Deploy with automatic builds enabled

#### **Build Process**
```bash
# Build command
npm run build
# Installs client dependencies, builds React app, prepares server

# Start command  
npm start
# Installs server dependencies and starts production server
```

### **Manual Deployment**
```bash
# 1. Build the application
npm run build

# 2. Start production server
npm start

# Server will serve the built React app and API endpoints
```

---

## 🔒 Security Features

### **Authentication Security**
- JWT tokens with expiration
- Password hashing with bcrypt (8 salt rounds)
- Email verification for account activation
- Token-based authorization middleware

### **Data Validation**
- MongoDB schema validation
- Unique constraints on critical fields
- Input sanitization and validation
- File upload restrictions

### **API Security**
- CORS configuration
- Rate limiting considerations
- Environment variable protection
- Secure cookie handling (ready for HTTPS)

---

## 🧪 Testing

### **API Testing**
Use tools like Postman or Thunder Client with the provided API documentation.

### **Test Data**
Sample test data for development:
```javascript
// Sample User
{
  "name": "John Farmer",
  "email": "john@farmer.com",
  "contact": 9876543210,
  "password": "password123"
}

// Sample Product
{
  "name": "Organic Basmati Rice",
  "category": "rice",
  "description": "Premium quality aged basmati rice",
  "pricePerUnit": 120,
  "measuringUnit": "kg",
  "minimumOrderQuantity": 5,
  "quantity": 500,
  "shelfLife": "12 months",
  "deliveryRadius": 15,
  "location": {
    "type": "Point",
    "coordinates": [77.2090, 28.6139]
  }
}
```

---

## 🤝 Contributing

### **Development Setup**
1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Make changes and test thoroughly
4. Commit: `git commit -m 'Add new feature'`
5. Push: `git push origin feature/new-feature`
6. Create Pull Request

### **Code Style**
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Ensure responsive design for frontend

### **Pull Request Guidelines**
- Include description of changes
- Reference any related issues
- Ensure all tests pass
- Update documentation if needed

---

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## 👥 Team

**Developer**: [ParthA164](https://github.com/ParthA164)

---

## 📞 Support

For support and queries:
- **GitHub Issues**: [Create an issue](https://github.com/ParthA164/HarvestHub/issues)
- **Email**: [Contact via GitHub](https://github.com/ParthA164)

---

## 🙏 Acknowledgments

- **Google Generative AI** for crop prediction capabilities
- **Cloudinary** for reliable image hosting
- **MongoDB** for robust database solutions
- **React & Node.js** communities for excellent documentation
- **Open Source Contributors** for various packages used

---

## 📈 Future Enhancements

- [ ] Mobile app development (React Native)
- [ ] Advanced search and filtering
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Seller verification system
- [ ] Advanced analytics dashboard
- [ ] Push notifications
- [ ] Social features (farmer networking)
- [ ] Weather API integration
- [ ] Machine learning for price prediction

---

**Made with ❤️ for the farming community**

*HarvestHub - Bridging the gap between farmers and consumers through technology*
