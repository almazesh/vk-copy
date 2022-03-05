import { Alert, Button, ButtonGroup, Grid, TextField } from '@mui/material'
import  { FC, Fragment, SyntheticEvent, useState } from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { useAuth } from '../../providers/useAuth'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

interface IUserData {        
  email:string,
  password:string,
  name:string
}

const Auth:FC = () => {
  const {ga , users} = useAuth()
  const [userData , setUserData] = useState<IUserData>({
    email:'',
    password:'',
    name:''
  } as IUserData) 
  
  const [error , setError] = useState('')
  const [isRegForm , setIsRegForm] = useState(false)
  
  const handleLogin = async (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(isRegForm){
      try{
        const res = await createUserWithEmailAndPassword(ga , userData.email , userData.password)

        await updateProfile(res.user , {
          displayName:userData.name
        })
        
      }catch(error:any){
        error.message  && setError(error.message)
      }
      
    }else{
      try{
        await signInWithEmailAndPassword(ga , userData.email , userData.password)
      }catch(error:any){
        error.message  && setError(error.message)
      }
    }

    setUserData({
      email:"",
      password:'',
      name:''
    })
  } 

  const navigate = useNavigate()

  useEffect(() =>{
    if(users) navigate('/')
  } , [users])


  return (
    <Fragment>
      {error && <Alert sx={{marginBottom:'20px'}} severity='error'>{error}</Alert>}
      <Grid sx={{display:"flex",justifyContent:'center',alignItems:'center',height:'80vh',flexDirection:'column'}}>
        <h2>В Контакте</h2>
        <form onSubmit={handleLogin}>
          <TextField 
            type='text' 
            label="Name" 
            variant="outlined" 
            value={userData.name} 
            onChange={e => setUserData({...userData , name:e.target.value})} 
            sx={{display:'block',marginBottom:3}}
          />
          <TextField 
            type='email' 
            label="Email" 
            variant="outlined" 
            value={userData.email} 
            onChange={e => setUserData({...userData , email:e.target.value})} 
            sx={{display:'block',marginBottom:3}}
            required
          />
          <TextField 
            type='password' 
            label="Password" 
            variant="outlined"  
            value={userData.password} 
            sx={{display:'block',marginBottom:3}}
            required
            onChange={e => setUserData({...userData , password:e.target.value})} 
          />

          <ButtonGroup variant='outlined' >
            <Button type='submit' onClick={() => setIsRegForm(false)}>AuthorZ</Button>
            <Button type='submit' onClick={() => setIsRegForm(true)}>Registration</Button>
          </ButtonGroup>
        </form>
      </Grid>
    </Fragment>
  )
}

export default Auth