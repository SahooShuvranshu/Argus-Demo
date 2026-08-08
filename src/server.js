const path = require('path');
const express = require('express');
const dashboardRouter = require('./routes/dashboard');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(rateLimiter({ windowMs: 60000, max: 100 }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/dashboard', dashboardRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`ARGUS Demo Status Server listening on port ${PORT}`);
  });
}

module.exports = app;
