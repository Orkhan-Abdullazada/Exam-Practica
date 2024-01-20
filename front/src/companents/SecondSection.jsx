import React from 'react'
import "./section2.scss"

function SecondSection() {
  return (
    <div className='section2'>
     <div className='section2_a'><a href="#">Services</a></div>
     <div className='section2_text'><p>With more than 20 years <br /> of  experience we can deliver the <br /> best product design.</p></div>
   <div className='section2_cards'>
   <div className='container'>
   <div className='card1'>
    <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/1.svg" alt="" />
       <h3>Graphic design</h3>
       <p style={{marginLeft:"30px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam odio ullam, necessitatibus optio at inventore?</p>


    </div>

  <div className='card2'>
       <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/2.svg" alt="" />
       <h3>Graphic design</h3>
       <p style={{marginLeft:"30px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam odio ullam, necessitatibus optio at inventore?</p>
    
  </div>
    <div className='card3'>
      <img src="https://preview.colorlib.com/theme/startup2/img/svg_icon/3.svg" alt="" />
      <h3 >Graphic design</h3>
       <p style={{marginLeft:"30px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam odio ullam, necessitatibus  optio at inventore?</p>

    </div>
   </div>
   </div>
    </div>
  )
}

export default SecondSection
