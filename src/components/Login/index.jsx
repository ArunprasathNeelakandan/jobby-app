import { useState } from 'react'
import Cookie from 'js-cookie'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const Login = (props) => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [isError,setIsError] = useState(false)
    const [error,setError] = useState('')

    const onSuccess = (jwt_token) => {
        Cookie.set('jwt_token',jwt_token,{expires: 7})
        props.history.replace('/')
    }

    const onFailure = (msg) => {
        setIsError(true)
        setError(msg)
    }



    const submitForm = async (event) => {
        event.preventDefault()
        const url= 'https://apis.ccbp.in/login'
        const option = {
            method: 'POST',
            body:JSON.stringify({username,password})
        }
        const response = await fetch(url,option)

        if (response.ok === true) {
            const data = await response.json()
            onSuccess(data.jwt_token)
        }else {
            const data = await response.json()
            onFailure(data.error_msg)
        }
        
        
    }

    return(
        <div className='login-bg'>
            <div className='login-form-container'>
                <img src='https://assets.ccbp.in/frontend/react-js/logo-img.png' className='login-logo-img'/>
                <div>
                <form onSubmit={submitForm}>
                    <label htmlFor='username'>USER NAME</label>
                    <br/>
                    <input className='login-input' placeholder='Username' id='username' onChange={(e)=>{setUsername(e.target.value)}}/>
                    
                    <br />
                    <label htmlFor='password'>PASSWORD</label>
                    <br/>
                    <input className='login-input' placeholder='Password' id='password' onChange={(e)=>{setPassword(e.target.value)}}/>
                   
                    <br/>
                    <button onSubmit={submitForm}>Login</button>
                </form>
                {isError && (<p className='err-msg'>{error}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Login