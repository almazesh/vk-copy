import { Box } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu';
import UserInfo from './UserInfo';
import UserLogOut from './UserLogOut';

const Sidebar:FC = () => {
  return (
    <div>
      <UserLogOut />
      <UserInfo />
      <Menu />
    </div>
  )
}

export default Sidebar