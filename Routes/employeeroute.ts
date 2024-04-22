// employeeroute.ts
import { Request, Response, NextFunction } from 'express';
import Employee from '../model/employee';
import mongoose from 'mongoose';
import express from 'express';

const router = express.Router();

// Middleware to fetch an employee by ID
async function getEmployee(req: Request, res: Response, next: NextFunction) {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        // Check if employee is an instance of a Mongoose document
        if (!(employee instanceof mongoose.Document)) {
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.locals.employee = employee;
        next();
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
}

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.json(savedEmployee);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single employee by ID
router.get('/:id', getEmployee, (req, res) => {
  res.json(res.locals.employee);
});

// Update an employee by ID
router.put('/:id', getEmployee, async (req, res) => {
  try {
    const employee = res.locals.employee;
    if (req.body.firstName) employee.firstName = req.body.firstName;
    if (req.body.lastName) employee.lastName = req.body.lastName;
    if (req.body.city) employee.city = req.body.city;
    const updatedEmployee = await employee.save();
    res.json(updatedEmployee);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an employee by ID
// Delete an employee by ID
router.delete('/:id', getEmployee, async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

  

export default router;
