// Import express module
const express = require('express');
const app = express();

// Define API endpoints
// Addition
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Invalid input parameters' });
    }
  
    const result = num1 + num2;
    res.json({ result });
  });
  
// Subtraction
app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Invalid input parameters' });
    }
  
    const result = num1 - num2;
    res.json({ result });
});
  
// Multiplication
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
  
    if (isNaN(num1) || isNaN(num2)) {
      return res.status(400).json({ error: 'Invalid input parameters' });
    }
  
    const result = num1 * num2;
    res.json({ result });
});
  
// Division
app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }

    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }

    const result = num1 / num2;
    res.json({ result });
});

// Exponentiation
app.get('/pow/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  const result = Math.pow(num1, num2);
  res.json({ result });
});

// Square root
app.get('/sqrt/:num', (req, res) => {
  const num = parseFloat(req.params.num);

  if (isNaN(num)) {
    return res.status(400).json({ error: 'Invalid input parameter' });
  }

  const result = Math.sqrt(num);
  res.json({ result });
});

// Modulo
app.get('/mod/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  if (num2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }

  const result = num1 % num2;
  res.json({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

