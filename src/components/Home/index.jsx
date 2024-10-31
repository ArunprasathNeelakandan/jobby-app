import React from 'react'
import Header from '../Header'
import './home.css'

function Home(props) {

  const onNavigateJobPage = () => {
    props.history.push('/jobs')
  }

  return (
    <div className='home-bg'>
      <Header />
      <div className="home-text-container">
        <h1 className="home-head">Find The Job That
          Fits Your Life</h1>
        <p>Millions of people are searching for jobs, salary
          information, company reviews. Find the job that fits your
          abilities and potential.</p>
        <button className='find-jobs-btn' onClick={onNavigateJobPage}>Find Jobs</button>
      </div>
    </div>
  )
}


export default Home
