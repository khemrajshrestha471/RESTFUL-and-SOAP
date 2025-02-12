# Express.js RESTful API for Basic Arithmetic Operations

This code at index.js is a simple RESTful API built with Express.js that performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Addition**
- **Subtraction**
- **Multiplication**
- **Division** (with check for division by zero)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)

### Steps to Install

1. Clone the repository:
    ```bash
    git clone <repository_url>
    ```

2. Navigate to the project folder:
    ```bash
    cd <project_folder>
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and define the port variable as follows:
    ```bash
    PORT_RESTFUL=3000
    ```

5. Start the server:
    ```bash
    npm start
    ```

The server will be running at `http://localhost:3000` (or the port defined in your `.env` file).

## API Endpoints

### 1. **Addition Endpoint**

- **URL**: `/addition/:num1/:num2`
- **Method**: `GET`
- **Parameters**:
  - `num1`: The first number to be added.
  - `num2`: The second number to be added.

- **Response**: Returns the sum of the two numbers.


Example:

GET /addition/5/7
 And the response will be

{
  "result": "Addition of 5 and 7 is 12"
}



....................................................................................................................


# Express.js SOAP API for Basic Arithmetic Operations


# SOAP Math Service

This repository provides a simple SOAP-based Math Service with operations for basic arithmetic functions. The service includes the following operations:

- Addition
- Subtraction
- Multiplication
- Division

## Prerequisites

Before using this service, ensure you have the following installed on your system:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm**: Node Package Manager, comes with Node.js

## Installation

Follow these steps to get the project running locally:

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

Start the server and it will show 

SOAP server listening on http://localhost:4000/wsdl

At postman, make it POST request and in header section, add content-type = text/xml and in body section choose raw option and XML format and paste the below body part.

<?xml version="1.0"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tns="http://example.com/math">
   <soapenv:Body>
      <tns:DivisionRequest>
         <num1>100</num1>
         <num2>10</num2>
      </tns:DivisionRequest>
   </soapenv:Body>
</soapenv:Envelope>


and when you sent the request, the response should be

<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"  xmlns:tns="http://example.com/math">
    <soap:Body>
        <tns:DivisionResponse>
            <result>10</result>
        </tns:DivisionResponse>
    </soap:Body>
</soap:Envelope>

And so on for Subtraction, Multiplication and Division