import React, { useState } from 'react'
import Header from '../Header'
import { FiSearch } from "react-icons/fi";
import Profile from '../Profile';
import JobFilter from '../JobFilter';
import JobList from '../JobList';
import './index.css'

function Jobs() {
  const [searchText, setSearchText] = useState('')
  const [employmentType, setEmploymentType] = useState([])
  const [salary, setSalary] = useState('1000000')

  const changeSalary = (e) => {
    setSalary(e.target.value)
  }

  const changeType = (event) => {
    const { value, checked } = event.target
    setEmploymentType(
      (ps) => {
        if (checked) {
          return [...ps, value]
        }
        else {
          const filterList = ps.filter((each) => each !== value)
          return filterList
        }
      }
    )
  }


  const jobsSearchElement = () => {
    return (
      <div className='search-container'>
        <input type='search' placeholder='Search' onChange={(e) => { setSearchText(e.target.value) }} />
        <div className='search-icon-container'>
          <FiSearch />
        </div>
      </div>
    )
  }



  return (
    <div className='jobs-bg'>
      <Header />
      <div className='sm-search-bar'>
        {jobsSearchElement()}
      </div>
      <div className="job-split-cart">
        <div className="profile-filter-container">
          <Profile />
          <hr className='hr-line' />
          <JobFilter changeSalary={changeSalary} changeType={changeType} />
        </div>
        <div className='job-describtion'>
          <div className='md-search-bar'>
            {jobsSearchElement()}
          </div>
          <JobList salary={salary} employmentType={employmentType} searchText={searchText} />
        </div>
      </div>
    </div>
  )
}

export default Jobs
