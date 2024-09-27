import mongoose from 'mongoose';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error(`Unable to connect to database: ${error.message}`);
        process.exit(1);
    }
};

export default connectToDatabase;
