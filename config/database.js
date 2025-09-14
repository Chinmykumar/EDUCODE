const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use MongoDB Atlas or skip database connection in development
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/taara';
    
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error.message);
    console.log('Continuing without database connection for development...');
    // Don't exit in development - allow server to start without DB
  }
};

module.exports = connectDB;