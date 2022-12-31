import toast from 'react-hot-toast'

/* validate login page username*/
export async function usernameValidate(values) {
    const error = usernameVerify({},values);
    return error;
}
/* validate login page password*/
export async function passwordValidate(values) {
    const error = passwordVerify({},values);
    return error;
}
/* validate login page password*/
export async function newpasswordValidate(values) {
    const error = newPasswordVerify({},values);
    return error;
}
/* validate register page password*/
export async function registerValidate(values) {
    const error = registerVerify({},values);
    return error;
}


/* validate username */

function usernameVerify(error={},values){
    if (!values.username) {
        error.username = toast.error('Username Required')
    }
    else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid Username...')
    }

    return error;
}

/* validate password */

function passwordVerify(error={},values){
    if (!values.password) {
        error.password = toast.error('Password Required')
    }
    else if (values.password.includes(" ")) {
        error.password = toast.error('Invalid Password...')
    }
    else if (values.password.length < 4) {
        error.password = toast.error('Password must have 4 charactor')
    }

    return error;
}

/* validate password */

function newPasswordVerify(error={},values){
    if (!values.password || !values.confirm_pwd) {
        error.password = toast.error('Password Required')
    }
    else if (values.password.includes(" ") || values.confirm_pwd.includes(" ")) {
        error.password = toast.error('Invalid Password...')
    }
    else if (values.password.length < 4) {
        error.password = toast.error('Password must have 4 charactor')
    }
    else if (values.password !== values.confirm_pwd) {
        error.password = toast.error('Password and confirm password is different')
    }

    return error;
}

/* validate register */

function registerVerify(error={},values){
    if (!values.email || !values.username || !values.password) {
        error.password = toast.error('Enter all filed...')
    }
    else if (values.password.length < 4) {
        error.password = toast.error('Password must have 4 charactor')
    }

    return error;
}
