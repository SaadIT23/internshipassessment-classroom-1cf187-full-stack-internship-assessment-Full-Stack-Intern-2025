const app = require('./app');
const PORT = process.env.PORT || 3000;



app.post('/api/sum', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Invalid Input! Both a and b must be numbers.' });
  }
  const sum = a + b;
  res.json({ sum });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
