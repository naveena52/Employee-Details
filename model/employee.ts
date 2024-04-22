import mongoose, { Schema, Document } from 'mongoose';

export interface IEmployee extends Document {
  FirstName: string;
  LastName: string;
  City: string;
}

const EmployeeSchema: Schema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  City: { type: String, required: true }
});

export default mongoose.model<IEmployee>('Employee', EmployeeSchema);
