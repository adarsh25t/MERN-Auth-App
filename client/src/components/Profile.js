import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useFormik } from 'formik';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import convertintoBase64 from '../helper/convert';
import { registerValidate } from '../helper/validate';

const Profile = () => {

  const [file,setFile] = useState()

  const formik = useFormik({
    initialValues : {
      fname:'',
      lname:'',
      phone:'',
      email:'',
      address:''
    },
    validateOnBlur:false,
    validateOnChange:false,
    validate: '',
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
                <h3>Profile</h3>
                <p>Explore more by <br/> connecting with us</p>
                <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handlerSubmit}>
                    <label htmlFor='files'>{file ? <img src={file} alt='file' className='file-lable-img'/> : <AccountCircleIcon className='avatar'/>}</label>
                    <input type={'file'} id='files' hidden onChange={onUpload}/>
                    
                    <div className="name d-flex">
                      <input {...formik.getFieldProps('fname')} type="text" placeholder='FIREST NAME' />
                      <input {...formik.getFieldProps('lname')} type="text" placeholder='LAST NAME' />
                    </div>
                    <div className="name d-flex">
                      <input {...formik.getFieldProps('phone')} type="text" placeholder='PHONE' />
                      <input {...formik.getFieldProps('email')} type="text" placeholder='EMAIL' />                    
                    </div>
                    <input {...formik.getFieldProps('address')} type="text" placeholder='ADDRESS' />
                    <Button variant='contained' type='submit'>SAVE</Button>  
                    
                    
                    <p className='opt-text'>come back later? <Link to={'/'}>Logout</Link></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Profile;