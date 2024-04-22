// index.ts
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import employeeRoutes from './Routes/employeeroute';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/typescriptDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

// Route for employee-related operations
app.use('/employees', employeeRoutes);

// Port configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
