const express = require('express');
const app = express();

app.disable('x-powered-by');

app.get('/', (req, res) => {
  res.send('DevSecOps Secure Pipeline Active');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
