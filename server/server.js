const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

/* Remove this code as it is refactored below
app.get('/', (req, res) => {
	res.send('PORT 8080');
})
*/
const port = 8080;

app.listen(port, () => `Server running on port ${port}`);