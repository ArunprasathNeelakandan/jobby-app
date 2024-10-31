import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { Oval } from 'react-loader-spinner'
import Header from '../Header'
import { TiStarFullOutline } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css'

function JobDetailes(props) {
    const [apiStatus,setApiStatus] = useState('')
    const [jobData,setJobData] = useState([])

    const id = props.match.params.id

    const getData = async() => {
        setApiStatus('loading')
        const jwtToken = Cookie.get('jwt_token')
        const url = `https://apis.ccbp.in/jobs/${id}`
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

    useEffect(()=>{
        getData()
    },[props])
    
    const similarJobs = (job) => {
        return (
            <Link to={`/jobs/${job.id}`} style={{ textDecoration: "none" }} key={job.id}>
                <li className='job-li-list' >
                    <div className='align'>
                        <img src={job.company_logo_url} alt="company-logo" className='company-logo' />
                        <div style={{ paddingLeft: '20px' }}>
                            <p>{job.title}</p>
                            <div style={{ marginTop: '10px' }}>
                                <TiStarFullOutline style={{ color: 'yellow', display: 'inline' }} />
                                <p style={{ paddingLeft: '10px', display: 'inline' }}>{job.rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className='align'>
                        <IoLocation />
                        <p style={{ marginLeft: '10px', marginRight: '30px' }}>{job.location}</p>
                        <FaSuitcase />
                        <p style={{ marginLeft: '10px', marginRight: '30px' }}>{job.employment_type}</p>
                    </div>
                    <hr />
                    <div>
                        <p>Job Desciption</p>
                        <p>{job.job_description}</p>
                    </div>
                </li>
            </Link>
        )
    }

    const renderSkills = (skill) => {
        return(
            <div className='skill-cantainer '>
                <img src={skill.image_url} alt="skill" />
                <p>{skill.name}</p>
            </div>
        )
    }

    const jobDetaileView = (job) => {
        return (
            <Link to={`/jobs/${job.id}`} style={{ textDecoration: "none" }} key={job.id}>
                <li className='job-li-list' >
                    <div className='align'>
                        <img src={job.company_logo_url} alt="company-logo" className='company-logo' />
                        <div style={{ paddingLeft: '20px' }}>
                            <p>{job.title}</p>
                            <div style={{ marginTop: '10px' }}>
                                <TiStarFullOutline style={{ color: 'yellow', display: 'inline' }} />
                                <p style={{ paddingLeft: '10px', display: 'inline' }}>{job.rating}</p>
                            </div>
                        </div>
                    </div>
                    <div className='align'>
                        <IoLocation />
                        <p style={{ marginLeft: '10px', marginRight: '30px' }}>{job.location}</p>
                        <FaSuitcase />
                        <p style={{ marginLeft: '10px', marginRight: '30px' }}>{job.employment_type}</p>
                    </div>
                    <hr />
                    <div>
                        <h4>Job Desciption</h4>
                        <p>{job.job_description}</p>
                    </div>
                    <hr/>
                    <h4>Skills</h4>
                    <ul className='skills-section align'>
                        {job.skills.map((each)=>renderSkills(each))}
                    </ul>
                    <div className='life-at-company-container'>
                        <h4>Life At Company</h4>
                        <p>{job.life_at_company.description}</p>
                        <img src={job.life_at_company.image_url} alt="" />
                    </div>
                </li>
            </Link>
        )
    }
    

    const renderFailureView = () => {
        return(
            <div className='failure-img-cart'>
                <img src='https://assets.ccbp.in/frontend/react-js/failure-img.png ' alt='failure' className='failure-img'/>
            </div>
        )
    }

    const renderLoadingView = () => {
        return(
            <div className="loader-cart-job">
            <Oval height='40' color='blue'/>
          </div>
        )
    }
    const renderSuccessView = () => {

        const {job_details,similar_jobs} = jobData 
        console.log(job_details)   
        return(
            <ul className='success-cart'>
                {jobDetaileView(job_details)}
                <h1></h1>
                {similar_jobs.map((each)=>similarJobs(each))}
            </ul>
        )
    }

    const renderView = () => {
        switch (apiStatus) {
            case 'loading' : return renderLoadingView()
            case 'success' : return renderSuccessView()
            case 'failure' : return renderFailureView()
            default:null
        }
    }
  return (
    <div className='bg-job-detaile'>
        <Header/>
       {renderView()} 
    </div>
  )
}

export default JobDetailes
