const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Skip database connection in development if no MONGODB_URI is provided
    if (!process.env.MONGODB_URI) {
      console.log('No MONGODB_URI provided. Skipping database connection for development...');
      return;
    }
    
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Skipping database connection for development...');
  }
};

module.exports = connectDB;