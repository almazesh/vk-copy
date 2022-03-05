import React, { FC } from 'react'
import { Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import {QuestionAnswer} from '@mui/icons-material'
import { user } from './UserData'


const UserInfo:FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Card 
        sx={{
          padding:2 ,
          backgroundColor:"#f1f7fa",
          borderRadius:3,
          border:'none',
          marginBottom:3}} 
          variant="outlined"
        >
        {user.map(user => (
          <Link 
          key={user.id}
          to={`/profile/${user.id}`} 
          style={{
              display:'flex',
              alignItems:'center',
              textDecoration:'none',
              color:"#111",
              marginBottom:16,
            }}>
            <Box 
              sx={{position:'relative',
              marginRight:2, 
            }}>
              <Avatar alt="Remy Sharp" src={user.avatar} />
              {user.isInNetwork && (
                <Box 
                sx={{
                  backgroundColor:'#4fb14f',
                  border:'2px solid #f1f7fa', 
                  width:10,
                  height:10,
                  borderRadius:100,
                  position:'absolute' , 
                  bottom:0,
                  right:0 , 
                  boxShadow:'0 0px 5px #4fb14f'
                }}/>
              )}
            </Box>
            <span  style={{fontSize:14}}>{user.name}</span>
          </Link>
        ))}
        <List >
          <ListItem disablePadding >
            <ListItemButton onClick={() => navigate('/messages')}>
              <ListItemIcon>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary="Сообщение"/>
            </ListItemButton>
          </ListItem>
        </List>
     </Card>
    </div>
  )
}

export default UserInfo