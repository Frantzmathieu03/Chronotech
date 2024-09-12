const express = require('express');
const connectDB = require('./config/connection');
const startApolloServer = require('./routes/graphql-route');

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Start Apollo Server
startApolloServer(app);

// Start the Express server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/graphql`);
});
