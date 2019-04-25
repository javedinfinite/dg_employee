const express = require('express')
const employeeController = require("./employee_controller");
const app = express()
const port = 3000

app.get('/', employeeController.listOfEmployees);

app.get('/id', employeeController.singleEmployee);

app.listen(port, () => console.log(`Node App for datagrokr_employee is running on port ${port}!`))

