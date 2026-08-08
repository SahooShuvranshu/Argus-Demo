const express = require('express');
const app = express();

app.use(express.json());

// Register Authentication Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Argus-Demo-API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Argus Demo Service running on port ${PORT}`);
});
