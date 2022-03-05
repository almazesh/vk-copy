import React, { FC, Fragment } from 'react'
import { Routes , Route} from 'react-router-dom';
import { routes } from './List';
import { useAuth } from '../providers/useAuth';
const RouteS:FC = () => {
  const {users} = useAuth()
  return (
    <Fragment>
      <Routes>
        {
          routes.map(route =>{
            if(route.auth && !users){
              return false
            }
            
            return(
              <Route path={route.path} element={<route.component />} key={`route ${route.path}`} 
              />
            )
          })
        }
      </Routes>
    </Fragment>
  )
}

export default RouteS