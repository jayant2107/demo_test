import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import PublicListingLayout from '../layout/PublicLayout/PublicListingLayout'
import { Paths } from './PublicPaths/Paths'


const PublicRoutes = ({ isAuth }) => {
  if (isAuth) {
    return <Navigate to='/loggedinuserssss' replace />
  } else {
    return <Outlet />
  }
}

const PrivateRoutes = ({ isAuth }) => {
  if (isAuth === null) {
    return <Navigate to='/' replace />
  } else {
    return <Outlet />
  }
}



export function OutcoachRoutes() {

  const token = null;

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<PublicRoutes isAuth={token} />}>
            <Route path="/" element={<PublicListingLayout />} >
              {Paths && Paths?.map((el) => <Route path={el?.path} element={el?.components} />)}
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  )
}
