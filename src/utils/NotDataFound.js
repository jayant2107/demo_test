import React from 'react'
import notfounddata from '../assets/notfoundata.png'
import styled from 'styled-components';

const NotDataFound = () => {
  return (
    <NotDataFoundStyle>
        <img className='notfound-img' src={notfounddata} alt=''/>
    </NotDataFoundStyle>
  )
}

export default NotDataFound;

const NotDataFoundStyle = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
.notfound-img{
    border: 10px solid #33374e;
    border-bottom: 10px solid #28a3a9;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 100%;
    padding: 5px;
}

`