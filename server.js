require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const { initServer } = require('./src/sockets/socket.server');

const httpServer = require('http').createServer(app);


// Connect to the database
connectDB();
initServer(httpServer);

httpServer.listen(3000, () => {
  console.log('Server is running on port 3000');
});