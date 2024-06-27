const express = require('express');
const next = require('next');
const path = require('path');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev }); // Initialize the application with the appropriate configuration
const handle = app.getRequestHandler(); // Create a request handler to manage Next.js rendering and routing

const server = express(); // Creates an instance of an Express.js server

app.prepare() // A Serverside method that ensures dependencies are loaded before handling requests
.then(() => { // After the dependencies are loaded, the application is ready to handle requests

  // Serve static files from the 'public' directory
  server.use(express.static(path.join(__dirname, 'public')));

  // Configure CORS to allow requests from any origin
  server.use(cors({
    origin: '*', // You can customize this to allow specific origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  }));

  // TODO: Read more into the handler to expand on documentation
  // Handle requests for Next.js pages
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 1337;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server listening on port ${PORT}`);
  });
});
