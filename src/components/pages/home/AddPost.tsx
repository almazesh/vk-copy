import { Box, TextField } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import  { FC, KeyboardEvent, useState } from 'react'
import { useAuth } from '../../providers/useAuth';



const AddPost:FC = () => {
  const [content , setContent ] = useState<string>('')
  const {users , db} = useAuth()
  const [error , setError] = useState('')


  const addPostHandler = async (e:KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter' && users){
      try{
        const docRef = await addDoc(collection(db, 'posts') , {
          author:users,
          content
        })
        console.log(docRef)
      }catch(e:any){
        setError(e)
      }
      setContent('')
    }
  }

  console.log(error)
  return (
    <>

      <Box
        sx={{border:'1px solid #ccc',
        borderRadius:'10px',
        padding:2,
      }}
      >
        <TextField 
          label="Расскажи что у тебя нового?"
          variant='outlined'
          value={content}
          InputProps={{
            sx:{
              borderRadius:'25px',
              bgcolor:'#f9f9f9',
            }
          }}
          sx={{
            width:'100%',
        }}
        onKeyPress={addPostHandler}
        onChange={e => setContent(e.target.value)}
        />

      </Box>  
    </>
  )
}

export default AddPost