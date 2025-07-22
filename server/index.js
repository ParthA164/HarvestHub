require("./config/connectDB.js");
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
require("dotenv").config();

const { setupWebSocket } = require("./services/setupWebSocket");

const product = require("./routes/product");
const review = require("./routes/review");
const order = require("./routes/order");
const faq = require("./routes/faq");
const graph = require("./routes/graph.js");
const ai = require("./routes/ai.js");
const auth = require("./routes/auth");

const PORT = process.env.PORT || 10000;
const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));

app.use(express.json());

const server = http.createServer(app);
const io = new Server(server);

setupWebSocket(io);

// API Routes (must come before static file serving)
app.use("/auth", auth);
app.use("/products", product);
app.use("/reviews", review);
app.use("/order", order);
app.use("/faqs", faq);
app.use("/graph", graph);
app.use("/ai", ai);

// Health Check - moved to a specific API route to avoid conflicts
app.get("/api/server-health", (req, res) => {
  const fs = require('fs');
  const frontendExists = fs.existsSync(path.join(__dirname, '../client/dist/index.html'));
  
  res.json({
    status: "HarvestHub Server is running",
    port: PORT,
    frontendBuilt: frontendExists,
    timestamp: new Date().toISOString()
  });
});

// Serve static files from React build (with proper options)
app.use(express.static(path.join(__dirname, '../client/dist'), {
  index: false, // Don't serve index.html automatically for directories
  redirect: false // Don't redirect trailing slashes
}));

// Handle React routing - return all non-API requests to React app
app.get('*', (req, res) => {
  // Don't serve React app for API routes
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
