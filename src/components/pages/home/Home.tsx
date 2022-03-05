import  { FC, Fragment } from 'react'
import AddPost from './AddPost';
import Posts from './Posts';

const Home:FC = () => {


  return (
    <Fragment>
        <AddPost/>
        <Posts/>
    </Fragment>
  )
}

export default Home