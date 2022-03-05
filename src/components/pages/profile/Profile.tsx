import React, { FC, Fragment } from 'react'
import { Box } from '@mui/system';
import { useAuth } from '../../providers/useAuth';
import { Avatar } from '@mui/material';

const Profile:FC = () => {
  const {users} = useAuth()
  return (
    <Fragment>
       <Box
          sx={{
            border:'1px solid #e2e2e2',
            borderRadius:'10px',
            padding:2,
            marginTop:3
        }}
        >
          <Avatar src={users?.avatar}/>
          <h2>{users?.name}</h2>
        </Box>
    </Fragment>
  )
}

export default Profile