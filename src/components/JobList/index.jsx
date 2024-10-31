import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { Oval } from 'react-loader-spinner'
import JobListItem from '../JobListItem'
import './index.css'

function JobList(props) {
    const [apiStatus,setApiStatus] = useState('')
    const [jobData,setJobData] = useState([])

    const {salary, employmentType, searchText} = props
    
    const getData = async() => {
        setApiStatus('loading')
        const jwtToken = Cookie.get('jwt_token')
        const url = `https://apis.ccbp.in/jobs?employment_type=${employmentType.join(',')}&minimum_package=${salary}&search=${searchText}`
        const options = {
            method: 'GET',
            headers : {
                Authorization : `bearer ${jwtToken}`
            }
        }

        const response = await fetch(url,options)

        if (response.ok === true) {
            const data = await response.json()
            setApiStatus('success')
            setJobData(data)
        }else {
            setApiStatus('failure')
        }    
        
    }

    const renderSuccessView = () => {
        
        if (jobData.total === 0){
            return(
                <div className='success-cart-no-job'>
                    <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png " alt="no-jobs"  className='no-job-img'/>
                </div>
            )
        }else {
            return(
                <div>
                    <JobListItem jobData={jobData}/>
                </div>
            )
        }
       
    }

    const renderLoadingView = () => {
        return(
            <div className="loader-cart-job">
            <Oval height='40' color='blue'/>
          </div>
        )
    }

    const renderFailureView = () => {
        return(
            <div className='failure-img-cart'>
                <img src='https://assets.ccbp.in/frontend/react-js/failure-img.png ' alt='failure' className='failure-img'/>
            </div>
        )
    }

    useEffect(()=>{
        getData()
    },[props])

    const renderView = () => {
        switch (apiStatus) {
            case 'loading' : return renderLoadingView()
            case 'success' : return renderSuccessView()
            case 'failure' : return renderFailureView()
            default:null
        }
    }
  return (
    <div className='job-detaile-cart'>
      {renderView()}
    </div>
  )
}

export default JobList
