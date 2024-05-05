import React from 'react'
import Card from '../Card/card'
import './land.css'
import InfiniteCards from './infiniteCards'
import BasicSelect from '../Filter/RolesFilter'
import RolesFilter from '../Filter/RolesFilter'
import RolesFilterEmp from '../Filter/RolesFilterEmp'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import RolesFilterExperience from '../Filter/RolesFilterExperience'
import RolesFilterRemote from '../Filter/RolesFilterRemote'
import RolesFilterBasePay from '../Filter/RolesFilterBasePay'
const LandingPage = () => {
  return (
    <div style={{marginBottom:"10rem"}}>
      
      <div className="div-filter" style={{display: "flex", justifyContent: "space-evenly", width:"50rem", marginLeft:"auto", marginRight:"auto",columnGap:"50 rem",marginTop: "2rem",marginBottom: "2rem"}}>
          <div className="div-filterStyle"><RolesFilter /></div>
          {/* <select>
            <option value="opt1" >No of Employees</option>
            <option value="option2"> 0-20</option>
            <option value="option2"> 20-50</option>
            <option value="option2"> 50-100</option>
            <option value="option2"> 100-500</option>
          </select> */}
          <div className="div-filterStyle"><RolesFilterEmp /></div>
          <div className="div-filterStyle"><RolesFilterExperience /></div>
          <div className="div-filterStyle"><RolesFilterRemote /></div>
          <div className="div-filterStyle"><RolesFilterBasePay /></div>
          <div className="div-filterStyle">
          <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          style={{width:"10rem", maxWidth:"20rem"}}
        />
          </div>
          {/* <select>
            <option value="opt1" >Experience</option>
            <option value="option2"> 0 - Fresher</option>
            <option value="option2"> 1 - 3 Entry Level </option>
            <option value="option2"> 3 - 5 Mid Level </option>
            <option value="option2"> 5 - 10 Senior Level </option>
          </select>
          
          <select>
            <option value="opt1" >Remote</option>
            <option value="option2"> Hybrid</option>
            <option value="option2"> Fulltime</option>
            <option value="option2"> Worker</option>
          </select>

          <select>
            <option value="opt1" >Min Base Pay Salary</option>
            <option value="option2"> Manager</option>
            <option value="option2"> Developer</option>
            <option value="option2"> Worker</option>
          </select>
          <textarea >  </textarea>" */}
      </div>
   

      <div className='landingP' style={{display: "flex"}}>
        <Card />
        <Card />
        <Card />
        
      </div>
      {/* <InfiniteCards /> */}
    </div>

  )
}

export default LandingPage