import React, { FC, Fragment, MouseEvent, useEffect } from 'react'
import { useAuth } from '../../providers/useAuth';
import { useState } from 'react';
import { onSnapshot, collection, addDoc } from 'firebase/firestore';
import { IMessage } from '../../../types';
import { List, ListItem, Grid, ListItemText, Divider, TextField, Fab, Avatar } from '@mui/material';
import {Send as SendIcon} from '@mui/icons-material'

const Messages:FC = () => {
  const {db , users} = useAuth()
  const [messages , setMessages] = useState<IMessage[]>([])
  const [message , setMessage] = useState('')

  useEffect(() => {
    const unsub =  onSnapshot(collection(db , 'messages') , doc => {
      const array: IMessage[] = []
      doc.forEach((d:any) => {
        array.push(d.data())
      });

      setMessages(array)
    })

    return () =>{
        unsub()
    }
  } , [])


  const addMessage = async (e:MouseEvent<HTMLButtonElement>) =>{
    try{
      const docRef = await addDoc(collection(db, 'messages') , {
        users , message
      })
    }catch(e:any){
      console.log(e)
    }

    setMessage('')
  }


  return (
    <Fragment>
        <List sx={{height:"65vh" , overflowY:'auto'}}>
            {messages.map((msg , idx) => (
              <ListItem key={idx}>
                <Grid container sx={msg.users.id === users?.id ?  {textAlign:'right'} : {}}>
                    <Grid item xs={12} display="flex" justifyContent={msg.users.id === users?.id ? 'flex-end' : 'flex-start'}>
                        <Avatar src={msg.users.avatar} sx={{width:'30px' , height:'30px'}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText sx={msg.users.id === users?.id ? {color:'#1976d2'} : {}}  primary={msg.message}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText style={msg.users.id === users?.id ? {textAlign:'right'} : {textAlign:'left'}} secondary={msg.users.name}></ListItemText>
                    </Grid>
                </Grid>
              </ListItem>
            ))}
        </List>
        <Divider />
        <Grid container style={{padding: '20px'}}>
            <Grid item xs={11}>
                <TextField id="outlined-basic-email" label="Type Something" fullWidth onChange={e => setMessage(e.target.value)} value={message}/>
            </Grid>
            <Grid item xs={1} >
                <Fab color="primary" onClick={addMessage}><SendIcon /></Fab>
            </Grid>
        </Grid> 
    </Fragment>
  )
}

export default Messages