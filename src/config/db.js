const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
    try {
        let dbUrl = process.env.MONGO_URI;

        // Try to connect to local MongoDB, if fails or not provided, use memory server
        if (!dbUrl || dbUrl.includes('localhost')) {
            try {
                // Test connection to local mongo first with short timeout
                await mongoose.connect(dbUrl, { serverSelectionTimeoutMS: 2000 });
                console.log('Using local MongoDB');
            } catch (err) {
                console.log('Local MongoDB not found, starting In-Memory Database...');
                const mongod = await MongoMemoryServer.create();
                dbUrl = mongod.getUri();
                await mongoose.connect(dbUrl);
                console.log('In-Memory MongoDB Started');
            }
        } else {
            await mongoose.connect(dbUrl);
            console.log('Connected to Remote MongoDB');
        }
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
