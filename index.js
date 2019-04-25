const exp =require ('express')
const app = exp()
app.get('/:id', (req,res,next) => {
    const id = parseInt(req.params.id, 10);
    var response = getEmpDetails(id);
    res.status(200).send({
        message : 'abc',
        data : response
      }),
    res.status(404).send({
        message: 'Page no found', 
    })
});
function getEmpDetails(id){
    const file = require('fs');
    let jsonData = require('./DataGrokrEmployeeDb.json');
    return jsonData.EmployeeDetails.filter(
        function(data){ return data.EmployeeId == id; }
    );
    // return(jsonData.EmployeeDetails);
}
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running in the port ${PORT}`);
});