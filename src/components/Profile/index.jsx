import React, { useEffect,useState } from 'react'
import Cookie from 'js-cookie'
import './index.css'
import { Oval } from 'react-loader-spinner'


function Profile() {
  const [profileDetailes,setProfileDetailes] = useState({})
  const [apiStatus,setApiStatus] = useState('')


  const onRetry = () => {
    getProfileData()
  }

  const getProfileData = async() => {
    setApiStatus('loading')
    const jwtToken = Cookie.get('jwt_token') 
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      method: 'GET',
      headers: {
        Authorization : `Bearer ${jwtToken}`
      }
    }

    const response = await fetch(url,options)
    if (response.ok === true) {
      const ProfileData = await response.json() 
      setProfileDetailes(ProfileData.profile_details)
      setApiStatus('success')
    } 
    else {
      setApiStatus('failure')
    }
  }
 const failureView = () => {
    return(
      <div className='loader-cart profile-bg'>
        <button className='retry-btn' onClick={onRetry}>Retry</button>
      </div>
    )
 }

  const loadingView = () => {
    return(
      <div className="profile-bg loader-cart">
        <Oval height='40' color='blue'/>
      </div>
    )
  }

  const successView = () => {
    return (
      <div className="profile-container">
      <img src={profileDetailes.profile_image_url} alt='profile-img' />
      <h6>{profileDetailes.name}</h6>
      <p>{profileDetailes. short_bio}</p>
    </div>
    )
  }

  const renderview = () => {
    switch (apiStatus) {
      case 'success' : return successView() 
      case 'loading' : return loadingView()
      case 'failure' : return failureView()
      default : return null
    }
  }


  useEffect(()=>{
    getProfileData()
  },[])

  return (
    <div className='profile-bg'>
       {renderview()}
    </div>
   
  )
}

export default Profile
