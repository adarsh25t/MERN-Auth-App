const userModel = require('../model/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config');


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
exports.register = async (req,res,next) => {
    try {
        const {username,email,password} = req.body;

        const existingUsername = await userModel.findOne({username});
        const existingEmail = await userModel.findOne({email});

        // check username exist or not
        if(existingUsername) return next(res.status(404).json({message:'username already register'}));
        // check email exist or not
        if (existingEmail) return next(res.status(404).json({message:'email already register'}));
        
        // convert password
        const hashPwd = await bcrypt.hash(req.body.password,10);
        req.body.password = hashPwd;

        const createNewUser = await userModel.create(req.body);
        res.status(200).json({
            status:'User Registration Successfully',
            user:createNewUser
        }) 

    } catch (error) {
        return next(res.status(404).json({error:error}))
    }
}

/* POST: http://localhost:8086/api/login 
   {
    "username":"hello@123",
    "password":"1234"
   }    
*/
exports.login = async (req,res,next) => {
    
    try {
        const {username,password} = req.body;

        // chech user exist or not
        const user = await userModel.findOne({username});
    
        if(user) {
            // compare user password
            let comparePwd = await bcrypt.compare(req.body.password,user.password);
            if (comparePwd) {

                // generate jwt token
                const token = jwt.sign({
                    userid:user._id,
                    username:user.username
                },config.JWT_SECRET,{expiresIn:'24h'})

                res.status(200).json({
                    "status":"User Login Successfully",
                    token,
                    user
                })
            }
            else {
                return next(res.status(404).json({error:'invalid password'}))
            }
        }
        else {
            return next(res.status(404).json({error:'invalid username'}))
        }

    } catch (error) {
        return next(res.status(404).json({error:error}))
    }
}

/* GET: http://localhost:8086/api/user/hello123 */
exports.getUser = async (req,res,next) => {
    
    try {
        const { username } = req.params;

        // check username
        if(!username) return next(res.status(404).json({error:'invalid username'}))
        
        // get user details
        user = await userModel.findOne({ username });

        // check user exist or not
        if(!user) return next(res.status(404).json({error:'invalid user details'}))

        res.status(200).json({
            "status":"success",
            user
        })

    } catch (error) {
        return next(res.status(404).json({error:error}))
    }
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
exports.updateUser = async (req,res,next) => {
    
    try {
        const { userid } = req.query
        
        if(userid) {
            const body = req.body
            const updateUser = await userModel.findByIdAndUpdate(userid,body,{new:true});

            return res.status(201).json({
                "status":'success',
                updateUser
            })
        }
        
    } catch (error) {
        return next(res.status(404).json({error:error}))
    }
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