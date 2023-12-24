const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/fronend/build/')));

app.get('/names', (req, res) => {
    res.send('jeevan');
})

app.listen(5000, () =>  {
    console.log('listening on port 5000');
});