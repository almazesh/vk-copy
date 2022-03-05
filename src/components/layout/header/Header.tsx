import { Search } from '@mui/icons-material'
import React, { FC, Fragment, useState } from 'react'
import  './Header.css'


const Header:FC = () => {

  const [isSearchActive , setIsSearchActive] = useState(false)

  return (
    <Fragment>
      <header className='header'>
        <div className='img_wrapper'>
          <img src="https://e7.pngegg.com/pngimages/434/907/png-clipart-white-and-blue-logo-vk-vkontakte-logo-icon-icons-logos-emojis-tech-companies-thumbnail.png" alt="" />
        </div>
        <div className="wrapper">
          {!isSearchActive && (
            <Search />
          )}
          <input 
            type="text" 
            placeholder='Поиск '
            onClick={() => setIsSearchActive(true)}
          />
        </div>
      </header>
    </Fragment>
  )
}

export default Header