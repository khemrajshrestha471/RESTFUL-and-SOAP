const soap = require('soap');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT_SOAP || 4000;
app.use(bodyParser.raw({ type: () => true, limit: '5mb' }));

// Define the SOAP Service
const service = {
  MathService: {
    MathPort: {
      Addition: function (args) {
        console.log("Addition request received:", args);
        if (!args || typeof args.num1 === 'undefined' || typeof args.num2 === 'undefined') {
          throw new Error("Missing required parameters");
        }
        return { result: args.num1 + args.num2 };
      },
      Subtraction: function (args) {
        console.log("Subtraction request received:", args);
        return { result: args.num1 - args.num2 };
      },
      Multiplication: function (args) {
        console.log("Multiplication request received:", args);
        return { result: args.num1 * args.num2 };
      },
      Division: function (args) {
        console.log("Division request received:", args);
        if (args.num2 == 0) {
          throw new Error("Division by zero is not allowed");
        }
        return { result: args.num1 / args.num2 };
      },
    },
  },
};

// Read the WSDL file
const xml = fs.readFileSync('math.wsdl', 'utf8');

// Create SOAP server
const server = app.listen(PORT, () => {
  console.log(`SOAP server listening on http://localhost:${PORT}/wsdl`);
});

soap.listen(server, '/wsdl', service, xml);