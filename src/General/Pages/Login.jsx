import React from 'react'
import { LoginForm } from '../../components/login-form'

function Login() {
    return (
        <div className='py-10 bg-rose-100 flex justify-center items-center '>

        <LoginForm className={"max-w-xl mx-auto  px-10 bg-white rounded-2xl py-10 shadow-xl"}/>
        </div>
    )
}

export default Login