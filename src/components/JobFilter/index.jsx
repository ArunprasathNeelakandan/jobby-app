import React, { useState } from 'react'
import './index.css'

function JobFilter(props) {

    const [employmentType, setEmploymentType] = useState([])
    const [salary,setSalary] = useState('1000000')

    const {changeSalary,changeType} = props

    const changesalary = (e) => {
        changeSalary(e)
    }

    const changetype = (event) => {
       changeType(event)
    }



  return (
    <div className='job-filter-bg'>
      <h4>Type Of Employment</h4>
      <div className="checkbox-cart">
        <input type='checkbox' id='full-time' onChange={changetype} value='FULLTIME'/>
        <label htmlFor='full-time'>Full Time</label>
      </div>
      <div className="checkbox-cart">
        <input type='checkbox' id='part-time' onChange={changetype} value='PARTTIME'/>
        <label htmlFor='part-time'>Part Time</label>
      </div>
      <div className="checkbox-cart">
        <input type='checkbox' id='freelance' onChange={changetype} value='FREELANCE'/>
        <label htmlFor='freelance'>Freelance</label>
      </div>
      <div className="checkbox-cart">
        <input type='checkbox' id='internship' onChange={changetype} value='INTERNSHIP'/>
        <label htmlFor='internship'>Inernship</label>
      </div> 

      <hr/>

      <h4>Salary Range</h4>
      <div className='checkbox-cart'>
        <input type='radio' id='ten' value='1000000' onChange={changesalary} name='salary'/>
        <label htmlFor='ten'>10 LPA and aove</label>
      </div>
      <div className='checkbox-cart'>
        <input type='radio' id='twenty' value='2000000' onChange={changesalary} name='salary'/>
        <label htmlFor='twenty'>20 LPA and aove</label>
      </div>
      <div className='checkbox-cart'>
        <input type='radio' id='thirty' value='3000000' onChange={changesalary} name='salary'/>
        <label htmlFor='thirty'>30 LPA and aove</label>
      </div>
      <div className='checkbox-cart'>
        <input type='radio' id='fourty' value='4000000' onChange={changesalary} name='salary'/>
        <label htmlFor='fourty'>40 LPA and aove</label>
      </div>

    </div>
  )
}

export default JobFilter
