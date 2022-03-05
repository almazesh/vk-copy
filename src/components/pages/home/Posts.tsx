import  { FC, Fragment, useEffect } from 'react'
import { IPost } from '../../../types';
import { Box } from '@mui/system';
import { Avatar, ImageList, ImageListItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/useAuth';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { initialPosts } from './InitialPosts';



const Posts:FC = () => {
  const {db} = useAuth()
  const [post , setPosts] = useState<IPost[]>(initialPosts)

  useEffect(() => {
    const unsub =  onSnapshot(collection(db , 'posts') , doc => {
      doc.forEach((d:any) => {
        setPosts(prev => [ d.data() , ...prev])
      });
    })

    return () =>{
        unsub()
    }
  } , [])

  return (
    <Fragment>
      {post.map((post,idx) => (
      <Box
        key={idx}
        sx={{
          border:'1px solid #e2e2e2',
          borderRadius:'10px',
          padding:2,
          marginTop:3
      }}

      >
        <Link 
          key={post.author.id}
          to={`/profile/${post.author.id}`} 
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
              <Avatar alt="Remy Sharp" src={post.author.avatar} />
            </Box>
            <Box>
              <div  style={{fontSize:14}}>{post.author.name}</div>
              <div  style={{fontSize:14,opacity:'0.6'}}>{post.createdAt}</div>
            </Box>
        </Link>
        <p>
          {post.content}
        </p>
        {post?.images?.length && (
          <ImageList variant='masonry' cols={3} gap={8}>
            {post.images.map(image => (
              <ImageListItem key={image}>
                <img 
                  src={image}
                  alt=""
                  loading='lazy'
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Box>
      ))}
    </Fragment>
  )
}

export default Posts