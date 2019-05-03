const data = require('./DataGrokrEmployeeDb')

function filterEmployeeWithId (item) {
    if(parseInt(item.id)===parseInt(this))
        return item
  }

module.exports = ({

    getEmployees :  (req, res, next) => {
        res.send(data);
    },
    getEmployee :   (req, res) => {

        const arrayOfObject = data.EmployeeDetails.filter(filterEmployeeWithId,req.params.id)
        if(arrayOfObject.length==0)
            res.send("Data Not Found For the requested ID : "+req.params.id);
        else
        {
            res.send(arrayOfObject[0]);
        }

    }

})
