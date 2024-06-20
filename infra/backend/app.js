const express = require('express');
const app = express();
const { Pool } = require('pg');
const pool = new Pool({
  user: 'myuser',
  host: 'database',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432
});

app.get('/data', async (req, res) => {
  const result = await pool.query('SELECT dado FROM dados');
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
