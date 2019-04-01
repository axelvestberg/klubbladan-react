const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// get reference to the client build directory
const staticFiles = express.static(path.join(__dirname, '../client/build'))
// pass the static files (react app) to the express app. 
app.use(staticFiles)
app.use('/*', staticFiles)

require('./routes')(app);

const port = process.env.PORT || 8080;

app.listen(port, () => `Server running on port ${port}`);