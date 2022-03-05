import React, { FC, Fragment } from 'react'
import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { QuestionAnswer } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { menu } from './MenuData';

const Menu:FC = () => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Card sx={{padding:2 ,backgroundColor:"#f1f7fa",borderRadius:3,border:'none',marginBottom:12}} variant="outlined">
        <List >
          {menu.map(item => (
            <ListItem disablePadding key={item.link}>
              <ListItemButton onClick={() => navigate(item.link)}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </Fragment>
  )
}

export default Menu