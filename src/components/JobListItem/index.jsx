import React from 'react'
import './index.css'
import { TiStarFullOutline } from "react-icons/ti";
import { IoLocation } from "react-icons/io5";
import { FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function JobListItem(props) {
    const { jobData } = props
    const { jobs } = jobData
    const renderJobList = (job) => {
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
    return (
        <ul className='un-list'>
            {jobs.map((each => renderJobList(each)))}
        </ul>
    )
}

export default JobListItem
