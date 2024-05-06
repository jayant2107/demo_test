import React from 'react'
import styled from 'styled-components';
import dimondlogo from '../assets/Vectorr76.svg'

function Headersecondlayout() {
  return (
    <Wrappersecondlayout>
    <div className='wrapper-dimond-logo'>
        <img className='dimond-logo' src={dimondlogo} alt=''/>
        <p className='complite-your-booking'>Complete your booking</p>
    </div>

    </Wrappersecondlayout>
  )
}

export default Headersecondlayout


const Wrappersecondlayout = styled.div`

.dimond-logo{
width: 26px;
height: 26px;

}
.wrapper-dimond-logo{
 width: 48px;
height: 48px;
padding: 2px;
border-radius: 32px;
background: #FFFFFF;
border: 1px solid #2E3038;
display:flex;
${'' /* align-items:center; */}
${'' /* justify-content:center; */}
}

.complite-your-booking{
font-family: Montserrat;
font-size: 24px;
font-weight: 700;
color:#FFFFFF;
}

`;
