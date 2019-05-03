const express = require('express')
const employeeController = require("./employee_controller");
var cors = require('cors')
const app = express()
var port = process.env.PORT || 3001;


var whitelist = ['http://localhost:3000', 'https://datagrokr-employee.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

app.get('/', employeeController.getEmployees);

app.get('/:id', employeeController.getEmployee);


app.listen(port, () => console.log(`Node App for datagrokr_employee is running on port ${port}!`));

