import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export default function PublicListingLayout() {

const location = useLocation()?.pathname;

const checkingRoutes = () => {
    if(location === "/" || location === "/searchMelbourne" || location === "/oneoffevent"){
        return true;
    }else{
        return  false;
    }
}

    return (
        <>
        {checkingRoutes() ?
        
            <PublicListingLayoutWrapper>
                <Header />
                <Outlet />
            </PublicListingLayoutWrapper>
            :
            <PrivateListingLayoutwrapper>
                <Outlet />
            </PrivateListingLayoutwrapper>
        
        }
        </>
    )
}

const PublicListingLayoutWrapper = styled.div`
width:100%;
height:100%;
position:relative;
background: #F7F6F4;


`;

const PrivateListingLayoutwrapper = styled.div`
width:100%;
height:100%;
position:relative;
background: #33374e;
`;