
/* PUT: http://localhost:8086/api/register 
   {
    "fname":"adarsh",
    "lname":"t"
    "username":"hello@123",
    "password":"1234"
    "email":"hello@gmail.com",
    "phone":"9087564324",
    "address":"hello ,kerala",
    "profile":""
   }    
*/
exports.register = (req,res) => {
    res.status(201).json({message:'hii'})
}

/* POST: http://localhost:8086/api/login 
   {
    "username":"hello@123",
    "password":"1234"
   }    
*/
exports.login = ( req,res) => {
    res.status(200).json({message:'hello'})
}

/* GET: http://localhost:8086/api/user/hello123 */
exports.getUser = (req,res) => {
    res.status(200).json({message:'hello'})
}

/* PUT: http://localhost:8086/api/updateuser
    {
        id:<userid>
    }
body:{
        fname:"",
        lname:"",
        profile:""
    }
*/
exports.updateUser = (req,res) => {
    res.status(200).json({message:'hello'})
}

/* GET: http://localhost:8086/api/genetateOTP */
exports.genetateOTP = (req,res) => {
    res.status(200).json({message:'hello'})
}

/* GET: http://localhost:8086/api/verifyOTP */
exports.verifyOTP = (req,res) => {
    res.status(200).json({message:'hello'})
}

// successfully redirect user then OTP is valid
/* GET: http://localhost:8086/api/createResetSession */
exports.createResetSession = (req,res) => {
    res.status(200).json({message:'hello'})
}

// update the password when we have vaild session
/* PUT: http://localhost:8086/api/resetPassword */
exports.resetPassword = (req,res) => {
    res.status(200).json({message:'hello'})
}