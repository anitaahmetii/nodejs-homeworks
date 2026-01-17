require('dotenv').config();
const app = require('./app');
const connectDB = require('./Database/Connection/connection');


async function startServer()
{
    try
    {
        const PORT = process.env.PORT;
        console.log("Connecting to database...");
        await connectDB();
        console.log("Starting server...");
        app.listen(PORT, () => { console.log(`Server running on PORT ${PORT}`); });
    }
    catch(err)
    {
        console.log("Server failed to connect!", err.message);
        process.exit(1);
    }
}

startServer();



