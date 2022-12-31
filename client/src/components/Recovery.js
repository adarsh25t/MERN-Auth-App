import { Button } from '@mui/material'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Recovery = () => {
  return (
    <section className='home-page'>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="home-page-card ">
                <h3>Recovery</h3>
                <form className='d-flex flex-column justify-content-center align-items-center mt-4'>
                    <span className='text-center opt-text'>Enter 6 digit OTP send to your email address.</span>
                    <input type="text" placeholder='OTP' />
                    <Button variant='contained' type='submit'>Recover</Button>
                    <p className='d-flex justify-content-center align-items-center opt-text pt-0'>
                      <p >Can't get OTP ? </p> 
                      <p className='opt-recover'> Recover</p>
                    </p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Recovery