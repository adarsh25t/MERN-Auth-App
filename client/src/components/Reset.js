import { Button } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { newpasswordValidate } from '../helper/validate'

const Reset = () => {


  const formik = useFormik({
    initialValues : {
      password:'',
      confirm_pwd:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    validate: newpasswordValidate,
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
                <h3 className='reset-text'>Reset Password</h3>
                <p>Enter new password</p>
                <form className='d-flex flex-column justify-content-center align-items-center mt-4' onSubmit={handlerSubmit}>
                  <input {...formik.getFieldProps('password')} type="text" placeholder='password' />
                  <input {...formik.getFieldProps('confirm_pwd')} type="text" placeholder='confirm password' />
                  <Button variant='contained' type='submit'>Sign In</Button>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Reset