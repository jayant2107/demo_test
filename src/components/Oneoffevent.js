import React from 'react'
import Filtter from './Filtter'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom'
import outcoachlogo from '../assets/Outcoach logo 1.svg'
import Bookcompo from './Bookcompo';
import Calender from './Calender';
import leftvect from '../assets/leftvect.svg'
import rightvect from '../assets/rightvact.svg'
import { BookingBoxWrapper } from '../pages/Landing';



function Oneoffevent() {

    const data = useLocation().state


    return (
        <Oneoffeventwrap>
            <div className='one-offf-event-filter-wrap'>
                <Filtter data={data} />
            </div>
            <div className='main-wrap-hadding'>
                <div className='wrapper-hadding'>
                    <p className='upcoming-hadding'>One-off Events</p>
                    <div className='right-side-hadding-wrap'>
                        <p className='powered-hadding'>Powered by</p>
                        <img src={outcoachlogo} alt='' />
                    </div>
                </div>
                <div className='border-bottom'>
                </div>
                <div className='wrapper-calender-book'>
                    <div className='one-off-event-calender-side'>
                        <div className='calender-month-wrap'>
                            <div className='wraper-tow-side-vect'>
                                <img className='vecter' src={leftvect} alt='' />
                            </div>
                            <p className='month-year'>May 2024</p>
                            <div className='wraper-tow-side-vect'>
                                <img className='vecter' src={rightvect} alt='' />
                            </div>
                        </div>
                        <div className='calender-wraper'>
                            <Calender />
                        </div>
                    </div>
                    <div className='one-off-event-book-side'>
                        <p className='book-date'>1 May, 2022</p>
                        <Bookcompo backgroundcolor={false} data={data} />
                        <div className='one-off-compo-border-bottum'></div>
                    </div>
                </div>
            </div>
        </Oneoffeventwrap>
    )
}

export default Oneoffevent


const Oneoffeventwrap = styled.div`

.one-offf-event-filter-wrap{
width: 100%;
height: 100%;
border-radius: 16px;
padding: 24px 32px 24px 32px;
border-style:none;
outline:none;
}

.upcoming-hadding{
font-family: Montserrat;
font-size: 24px;
font-weight: 700;
}

.powered-hadding{
font-family: Inter;
font-size: 16px;
font-weight: 400;
}

.wrapper-hadding{
    display:flex;
    align-items:center;
    justify-content:space-between;
}

.right-side-hadding-wrap{
    display:flex;
    align-items:center;
    gap:9px;
}
.main-wrap-hadding{
    width:calc(100% - 30px);
    margin:auto;
    padding:25.5px 32px;
   border-radius: 16px 16px 0px 0px;
   background: #FFFFFF;
   box-shadow: 1px 1px 8px 0px #AAAAAA80;
}
.border-bottom{
    border-bottom:1px solid #AAAAAA80
}
.wrapper-calender-book{
    width:100%;
    height:100%;
    display:flex;
}
.one-off-event-calender-side{
    width:45%;
    border-right:1px solid #AAAAAA80
}
.one-off-event-book-side{
    width:55%;
    margin:29px;
}
.book-date{
font-family: Inter;
font-size: 20px;
font-weight: 600;
width: 148px;
height: 32px;
padding: 4px 16px 4px 16px;
border-radius: 8px;
background: #E8EDFC;
}
.vecter{
 width: 24px;
height: 24px;
}
.wraper-tow-side-vect{
  width: 40px;
height: 40px;
border-radius: 24px;
background: #D9DBE1;
display:flex;
align-items: center;
justify-content:center;
}
.month-year{
font-family: Inter;
font-size: 24px;
font-weight: 700;
text-align: center;
}
.calender-month-wrap{
    display:flex;
    align-items:center;
    justify-content:space-around;
    margin:25px;
}
.calender-wraper{
    display:flex;
    align-items:center;
    justify-content:space-around;
}

.one-off-compo-border-bottum{
    border-bottom:1px solid #AAAAAA80;
    margin-bottom:19px;
}

@media (max-width:900px) {
    .wrapper-calender-book{
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-right:none;
  }
}

@media (max-width:600px) {
    .right-side-hadding-wrap{
     display:none;
  }
}

@media (max-width:600px) {
    .upcoming-hadding{
      margin-bottom:10.5px;
  }
}

@media (max-width:335px) {
    .upcoming-hadding{
     font-size:20px;
  }
}

@media (max-width:950px) {
    .one-off-event-calender-side{
        width:100%;
        border-right:none;
  }
}

@media (max-width:680px) {
    .one-off-event-book-side{
        width:100%;
  }
}



@media (max-width:850px) {
    .month-year{
        font-size:18px;
  }
}

@media (max-width:850px) {
    .wraper-tow-side-vect{
        width: 35px;
       height: 35px;
  }
}

@media (max-width:850px) {
    .vecter{
        width:  20px;
       height: 20px;
  }
}

@media (max-width:425px) {
    .month-year{
        font-size:13px;
  }
}

@media (max-width:425px) {
    .wraper-tow-side-vect{
        width: 30px;
       height: 30px;
  }
}

@media (max-width:425px) {
    .vecter{
        width:  16px;
       height: 16px;
  }
}

@media (max-width:390px) {
    .month-year{
        font-size:14px;
  }
  .wraper-tow-side-vect{
        width: 24px;
       height: 24px;
  }
  .vecter{
        width:  12px;
       height: 12px;
  }
}

@media (max-width:345px) {
    .month-year{
        font-size:12px;
  }
  .wraper-tow-side-vect{
        width: 20px;
       height: 20px;
  }
  .vecter{
        width:  12px;
       height: 12px;
  }
}

`;