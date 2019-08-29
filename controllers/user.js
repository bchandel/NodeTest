

var user = {
    saveUser : function(req,res){
        var missingFields = user.validateFields(req.body);
        if(missingFields.length == 0){
            if(req.body.subscribe){
                var resString = "Hello " + req.body.fname + " " + req.body.lname + " Thank you for signing up. Your Account is now created.";
                resString += " You would be receiving our periodic newsletters to your email;" + req.body.email
                res.send(resString);
            }else{
                var resString = "Hello " + req.body.fname + " " + req.body.lname + " Thank you for signing up. Your Account is now created.";
               console.log(resString);
                res.send(resString);
            }

        }else {
            var resString = "Please Enter " + missingFields.join(',');
            //res('fields are missing',resString);
            res.render('index',{msg : resString});
        }
    },
    validateFields : function(data){
        var requiredFields = ['fname', 'lname','email','password'];
        var fieldMapping = {
            'fname' : 'First Name',
            'lname' : 'Last Name',
            'email' : 'E-mail',
            'password' : 'Password'
        }
        var missingFields =[];
        for(var i=0; i<requiredFields.length; i++){
            if(!data[requiredFields[i]]){
                missingFields.push(fieldMapping[requiredFields[i]]);
            }
        }
        return missingFields;
    }
};

module.exports = user;