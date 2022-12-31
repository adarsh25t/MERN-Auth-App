import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import convertintoBase64 from '../helper/convert';
import { registerValidate } from '../helper/validate';

const Register = () => {

  const [file,setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email:'',
      username:'',
      password:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    validate: registerValidate,
    onSubmit: async (value) => {
        value = await Object.assign(value,{profile:file || ''})
        console.log(value);
    }
  })

  const handlerSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit()
  }

  const onUpload = async (e) => {
    const base64 = await convertintoBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <section className='home-page'>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="home-page-card ">
                <h3>Hello Again!</h3>
                <p>Explore more by <br/> connecting with us</p>
                <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handlerSubmit}>
                    <label htmlFor='files'>{file ? <img src={file} alt='file' className='file-lable-img'/> : <AccountCircleIcon className='avatar'/>}</label>
                    
                    <input type={'file'} id='files' hidden onChange={onUpload}/>
                    <input {...formik.getFieldProps('email')} type="text" placeholder='Email*' />
                    <input {...formik.getFieldProps('username')} type="text" placeholder='Username*' />
                    <input {...formik.getFieldProps('password')} type="text" placeholder='Password*' />
                    <Button variant='contained' type='submit'>Let's Go</Button>
                    <p className='opt-text'>Already Register? <Link to={'/'}>Login Now</Link></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register