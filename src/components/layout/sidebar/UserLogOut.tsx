import React from 'react'
import { Avatar, Card, Chip, Button } from '@mui/material';
import { useAuth } from '../../providers/useAuth';
import { signOut } from 'firebase/auth';

const UserLogOut = () => {
  const {users , ga} = useAuth()
  return (
    <Card variant='outlined' sx={{padding:2,backgroundColor:'#f1f7fa' , border:0 , borderRadius:3,marginBottom:5}}>
        <Chip avatar={<Avatar src={users?.avatar}/>} label={users?.name || 'Без имени'} variant="outlined" sx={{display:'flex',justifyContent:'flex-start',cursor:'pointer',padding:'30px 5px'}}/>
        <Button onClick={() => signOut(ga)}>Выйти</Button>
    </Card>
  )
}

export default UserLogOut