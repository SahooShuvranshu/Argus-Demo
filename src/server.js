const path = require('path');
const express = require('express');
const dashboardRouter = require('./routes/dashboard');
const exportRouter = require('./routes/export');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/dashboard', dashboardRouter);
app.use('/api/export', exportRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`ARGUS Demo Status Server listening on port ${PORT}`);
  });
}

module.exports = app;
