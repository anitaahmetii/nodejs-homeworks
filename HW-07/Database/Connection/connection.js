require('dotenv').config();
const mongoose = require('mongoose');

async function connectDatabase()
{
    try
    {
        if(!process.env.DB_CONNECTION) throw new Error("Database connection is not defined in .env");
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Database is connected!")
    }
    catch(err)
    {
        console.log("Failed to connect database: ", err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;