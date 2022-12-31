import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { Toaster } from 'react-hot-toast';
import { usernameValidate } from '../helper/validate';

const Username = () => {

    const formik = useFormik({
        initialValues : {
            username:''
        },
        validateOnBlur:false,
        validateOnChange:false,
        validate: usernameValidate,
        onSubmit: async (value) => {
            console.log(value);
        }
    })

    const handlerSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit()
    }


  return (
    <section className='home-page'>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="home-page-card ">
                <h3>Hello Again!</h3>
                <p>Explore more by <br/> connecting with us</p>
                <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handlerSubmit}>
                    <AccountCircleIcon className='avatar'/>
                    <input {...formik.getFieldProps('username')} type="text" placeholder='username...' />
                    <Button variant='contained' type='submit'>Let's Go</Button>
                    <p className='opt-text'>Not a member <Link to={'/register'}>Register Now</Link></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Username