const express = require('express');
const app = express();

app.get('/names', (req, res) => {
    res.send('jeevan');
})

app.listen(5000, () =>  {
    console.log('listening on port 5000');
});