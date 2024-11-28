import mongoose from 'mongoose';

// Connect to MongoDB
export const startDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:tavomama69@cluster0.a2ylu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Succsesful connection to Database');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};
