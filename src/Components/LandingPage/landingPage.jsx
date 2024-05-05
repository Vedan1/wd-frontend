import React from 'react'
import Card from '../Card/card'
import './land.css'
const LandingPage = () => {
  return (
    <>
    <div className="div-filter" style={{display: "flex", justifyContent: "space-evenly", width:"50rem", marginLeft:"auto", marginRight:"auto",columnGap:"50 rem"}}>
        <h3> Filter 1</h3>
        <h3> Filter 2</h3>
        <h3> Filter3</h3>
        <h3> Filter 4</h3>
        <h3> Filter 5</h3>
    </div>

    <div className='landingP' style={{display: "flex"}}>
        <Card />
        <Card />
        <Card />
    </div>
    </>

  )
}

export default LandingPage