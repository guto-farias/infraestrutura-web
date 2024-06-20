const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://10.0.2.3:3000/data');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from backend');
  }
});

app.listen(80, () => {
  console.log('Frontend running on port 80');
});
