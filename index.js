const express = require('express')
const employeeController = require("./employee_controller");
var cors = require('cors')
const app = express()
var port = process.env.PORT || 3001;

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

app.get('/', cors(corsOptions), employeeController.getEmployees);

app.get('/:id', employeeController.getEmployee);

app.listen(port, () => console.log(`Node App for datagrokr_employee is running on port ${port}!`));

