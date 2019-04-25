const express = require('express');
const employeeDb = require('./DataGrokrEmployeeDb');

const app = express();

app.get('/', function(req, res){
    res.send(JSON.stringify(employeeDb));
})

app.get(`/id=:id`, function(req, res){
    employeeData = employeeDb.EmployeeDetails.filter( item => item.EmployeeId === req.params.id);
    res.send(JSON.stringify(employeeData));
})

app.get(`/name=:name`, function(req, res){
    employeeData = employeeDb.EmployeeDetails.filter( item => item.EmployeeData.Name.toLowerCase() === req.params.name.toLowerCase());
    res.send(JSON.stringify(employeeData));
})

app.listen(3000);