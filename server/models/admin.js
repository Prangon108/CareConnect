// models/admin.js

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
