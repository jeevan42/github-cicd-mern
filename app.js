const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/fronend/build/')));

app.use(
    cors({
      methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      origin: function (origin, callback) {
        // Allow multiple origins (you can whitelist your domains here)
        const whitelist = [
          "http://localhost:3000",
        ];
        if (whitelist.includes(origin) || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true, // Important for cookies
    })
  );

app.get('/names', (req, res) => {
    res.send('jeevan');
})

app.listen(5000, () =>  {
    console.log('listening on port 5000');
});