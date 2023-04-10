import React from 'react'
import './SideBar.css';
import {Home, Group, Category, Timeline, FormatSize, ProductionQuantityLimits, KeyboardReturn, ShowChart, Logout} from '@mui/icons-material';


 function SideBar() {
  return (
    <div className='SideBar'>
        <div className="SideBarWraper">
            <div className="SideBarMenu">
            <h3 className="SideBarTitle">Dashboard</h3>
            <ul className='SideBarList'>

               <li className='SideBarListItems active'>
                 < Home className='SideBarIcon'/>
                   Home
               </li>

               <li className='SideBarListItems'>
                 < Group className='SideBarIcon' />
                   User
               </li>

               <li className='SideBarListItems'>
                 < Category className='SideBarIcon'/>
                 Category
               </li>

               <li className='SideBarListItems'>
                 < Timeline className='SideBarIcon'/>
                   Brand
               </li>

               <li className='SideBarListItems'>
                 < FormatSize className='SideBarIcon'/>
                   Size
               </li>

               <li className='SideBarListItems'>
                 < ProductionQuantityLimits className='SideBarIcon'/>
                   Product
               </li>

               <li className='SideBarListItems'>
                 < ShowChart className='SideBarIcon' />
                   Stock
               </li>

               <li className='SideBarListItems'>
                 < KeyboardReturn className='SideBarIcon'/>
                   Return Product
               </li>

               <li className='SideBarListItems'>
                 < Logout className='SideBarIcon' />
                   Logout
               </li>

            </ul>

            </div>
        </div> 

    </div>
  )
}
export default  SideBar