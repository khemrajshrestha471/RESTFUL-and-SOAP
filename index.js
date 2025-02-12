const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT_RESTFUL || 3000;

// Addition Endpoint (Converting both number to actual number format else it CONCATENATE the number)
app.get('/addition/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    const result = num1 + num2;
    res.json({ result: `Addition of ${num1} and ${num2} is ${result}` });
});

// Subtraction Endpoint
app.get('/subtraction/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = num1 - num2;
    res.json({ result: `Subtraction of ${num1} and ${num2} is ${result}` });
});

// Multiplication Endpoint
app.get('/multiplication/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = num1 * num2;
    res.json({ result: `Multiplication of ${num1} and ${num2} is ${result}` });
});

// Division Endpoint
app.get('/division/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    if (parseInt(num2) === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = num1 / num2;
    res.json({ result: `Division of ${num1} by ${num2} is ${result}` });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});