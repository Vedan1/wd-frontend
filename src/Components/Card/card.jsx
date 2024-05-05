import React from 'react'
import './cardStyle.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const Card = () => {
  return (
   <div className="bdr" >
    {/* Days Button */}
    <div className="div-days mar-1r" style={{textAlign:"left" }}>
        {/* <button > Days Remaining</button> */}
        <Chip label="⌛ Posted Days Ago " variant="outlined" />
    </div>

    {/* Image Field */}
    <div className="div-image mar-1r" style={{textAlign:"left", display:"flex"}}>
        <img src="https://logo.clearbit.com/lg.com" style={{height: "4rem",width: "3rem" ,border: "2px solid"}} alt='image'/>
        <div style={{marginLeft: "10px"}}>
            <div> Company Name</div>
            <div> Role</div>
            <div> Location</div>
            
        </div>

    </div>

    {/* Salary */}
    <div className="div-salary mar-1r" style={{textAlign:"left"}}>Estimated Salary</div>

    {/* Content */}
    <div className='content mar -r' style={{textAlign:"justify"}}>card Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, culpa in id aperiam iure maxime molestias nihil temporibus veniam, laborum tempora. Excepturi corrupti quibusdam facilis, perferendis velit eveniet soluta non?</div>

    {/* Exp */}
    <div className="div-experience mar-1r" style={{textAlign:"left"}}>
        <div>Minimum Experience Required </div>
        <div>2 Years </div>

    </div>
    <div> 
    <Button style={{width: "100%",height: "40px", marginBottom: "10px", background: "#54efc3"}} variant="contained">Easy Apply</Button></div>
    <div><Button style={{width: "100%",height: "40px", background: "#4943da"}} variant="contained">Refferals</Button></div>



    {/* <div >
        <button style={{width: "100%",height: "30px"}}>Easy Apply</button>
    </div>
    <div >
    <button style={{width: "100%", height: "30px"}}>Unlock Refferals</button>
    </div> */}

   </div>
  )
}

export default Card