import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import { Toaster } from 'react-hot-toast';
import { passwordValidate } from '../helper/validate';

const Password = () => {

    const formik = useFormik({
        initialValues : {
            password:''
        },
        validateOnBlur:false,
        validateOnChange:false,
        validate: passwordValidate,
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
                    <input {...formik.getFieldProps('password')} type="text" placeholder='password...' />
                    <Button variant='contained' type='submit'>Let's Go</Button>
                    <p className='opt-text'>Forgot Password <Link to={'/recovery'}>Recover Now</Link></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Password