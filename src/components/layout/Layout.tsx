 import { Grid } from '@mui/material';
import React, { FC } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar';
import RouteS from '../routes/Routes';
import { useAuth } from '../providers/useAuth';

 const Layout:FC = () => {
   const {users} = useAuth()
   return (
     <>
      <Header />
      <Grid container spacing={2} paddingX={5} marginTop={1}>
        {users && <Grid item md={3}>
          <Sidebar />
        </Grid>}
        <Grid item md={users ? 9 : 12}>
          <RouteS />
        </Grid> 
      </Grid>
     </>
   )
 }
 
 export default Layout




 