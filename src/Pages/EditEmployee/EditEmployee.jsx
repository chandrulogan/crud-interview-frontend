import React, { useState } from 'react'
import './EditEmployee.css'
import { Link } from 'react-router-dom'
import LogoutComponent from '../../Components/LogoutComponent/LogoutComponent'

const EditEmployee = () => {
  const [formData, setformData] = useState({
    name: "",
    department: "",
    designation: "",
    mail: "",
    mobileNumber: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
  }
  return (
    <div className='Home_container'>
      <div className='Home_container__inner'>
        <h3>View and Edit employee data</h3>
        <form onSubmit={onSubmit}>
          <input
            name='name'
            type='text'
            placeholder='Your name'
            onChange={handleChange}
            required
            value={formData.name}
          />
          <input
            name='mail'
            type='email'
            placeholder='Mail'
            onChange={handleChange}
            required
            value={formData.email}
          />
          <input
            name='mobileNumber'
            type='tel'
            placeholder='Mobile Number'
            onChange={handleChange}
            required
            value={formData.phoneNumber}
          />
          <select
            name='department'
            value={formData.department}
            onChange={handleChange}
          >
            <option>HR and Payroll</option>
            <option>Developer</option>
            <option>Devops</option>
          </select>
          <select
            name='designation'
            value={formData.designation}
            onChange={handleChange}
          >
            <option>Junior</option>
            <option>Senior</option>
            <option>TL</option>
            <option>Manager</option>
          </select>

          <button className='formPrimaryButton' type='submit'>
            Add employee
          </button>
          <Link to={`/`}>Back</Link>
        </form>
      </div>
      <LogoutComponent/>
    </div>
  )
}

export default EditEmployee