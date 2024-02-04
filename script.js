
function readFromData(){
    var formData={};

    formData['fullName']= document.getElementById('fullName').value;
    formData['empCode']=document.getElementById('empCode').value;
    formData['salary']=document.getElementById('salary').value;
    formData['city']=document.getElementById('city').value;

    document.write(formData['fullName']);

}