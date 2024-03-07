import React, { } from 'react'

import './Home.css';
import { Link } from 'react-router-dom';
import LogoutComponent from '../../Components/LogoutComponent/LogoutComponent';

const Home = () => {

  return (
    <div className='Mainpage_Container'>
      <div className='Mainpage_Container__inner'>
        <header>
          <Link to={`/add-employee`} className='addEmployee_Button'>Add employee</Link>
        </header>
        <table className="table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Emp Name</th>
              <th>Department</th>
              <th>Desigination</th>
              <th>Mail</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Chandru</td>
              <td>Mech</td>
              <td>Software Developer</td>
              <td>chandru@gmail.com</td>
              <td>987653210</td>
              <td>
                <Link to={`/view-edit-employee`}>View / Edit</Link>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <LogoutComponent />
    </div>
  )
}

export default Home