import React from 'react'
import './cardStyle.css'
const Card = () => {
  return (
   <div className="bdr" >
    {/* Days Button */}
    <div className="div-days" style={{textAlign:"left" }}>
        <button > Days Remaining</button>
    </div>
        <>      .</>
    {/* Image Field */}
    <div className="div-image" style={{textAlign:"left", display:"flex"}}>
        <img src="test-fend\src\Components\Card\sf.png" style={{height: "4rem",border: "2px solid"}} alt='image'/>
        <div >
            <div> Company Name</div>
            <div> Role</div>
            <div> Location</div>
            
        </div>

    </div>
    <>  . </>
    {/* Salary */}
    <div className="div-salary" style={{textAlign:"left"}}>Estimated Salary</div>
    <>   .</>
    {/* Content */}
    <div className='content' style={{textAlign:"justify"}}>card Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, culpa in id aperiam iure maxime molestias nihil temporibus veniam, laborum tempora. Excepturi corrupti quibusdam facilis, perferendis velit eveniet soluta non?</div>
    <>     .</>
    {/* Exp */}
    <div className="div-experience" style={{textAlign:"left"}}>
        <div>Minimum Experience Required </div>
        <div>2 Years </div>

    </div>
    <>      .</>

    <div >
        <button style={{width: "100%",height: "30px"}}>Easy Apply</button>
    </div>
    <div >
    <button style={{width: "100%", height: "30px"}}>Unlock Refferals</button>
    </div>

   </div>
  )
}

export default Card