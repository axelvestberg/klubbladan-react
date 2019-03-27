const express = require('express');

const app = express();

app.get('/api/friends', (req, res) => {
  const friends = [
    {id: 1, firstName: 'Axel', lastName: 'Vestberg'},
    {id: 2, firstName: 'Hanna', lastName: 'Smedeby'},
    {id: 3, firstName: 'Henrik', lastName: 'Söderlind'},
    {id: 4, firstName: 'Mårten', lastName: 'Söderlind'}
  ];
  
  res.json(friends);
  console.log(friends);
});

const port = 8080;

app.listen(port, () => `Server running on port ${port}`);