import * as Icon from '@mui/icons-material';
import { IMenuItem } from '../../../types';


export const menu: IMenuItem[] = [
   
    {
      title:'Моя страница',
      link:'/profile',
      icon:Icon.AccountCircle  
    },
    {
      title:'Друзья',
      link:'/friends',
      icon:Icon.People  
    },
    {
      title:'Новости',
      link:'/',
      icon:Icon.Article  
    },
]