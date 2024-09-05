import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;