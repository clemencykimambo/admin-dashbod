import React from 'react';
import './TopSide.css';
import {NotificationsNone, Settings, Translate} from '@mui/icons-material';


export default function TopSide() {
  return (
    <div className='topbar'>
       <div className="topbarwraper">
        
        <div className="left">
          <span className="logo">
            dashboard
          </span>
          </div>

          <div className="right">

          <div className="topbarIconContainer">
            < NotificationsNone />
              <span className="topIconBadge">2</span>
          </div>

              
          <div className="topbarIconContainer">
            < Settings />
          </div>

              
          <div className="topbarIconContainer">
            < Translate />
              <span className="topIconBadge">2</span>
          </div>

          <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className="topAvatar" />

          </div>

       </div>
    </div>
  )
}
