import React from 'react';
import './widgetSm.css'
import {Visibility} from '@mui/icons-material';

function widgetSm() {
  return (
    <div className='widgetSm'>
        <div className="widgetSmTitle">New Product</div>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='WdgetSmImg'/>
                <div className="widgetSmProduct">
                    <span className="widgetSmProductname">Tailes</span>
                    <span className="widgetSmProductTitle">Ground floor</span>
                </div>
                <button className="widgetSmbutton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='WdgetSmImg'/>
                <div className="widgetSmProduct">
                    <span className="widgetSmProductname">Tailes</span>
                    <span className="widgetSmProductTitle">Ground floor</span>
                </div>
                <button className="widgetSmbutton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='WdgetSmImg'/>
                <div className="widgetSmProduct">
                    <span className="widgetSmProductname">Tailes</span>
                    <span className="widgetSmProductTitle">Ground floor</span>
                </div>
                <button className="widgetSmbutton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='WdgetSmImg'/>
                <div className="widgetSmProduct">
                    <span className="widgetSmProductname">Tailes</span>
                    <span className="widgetSmProductTitle">Ground floor</span>
                </div>
                <button className="widgetSmbutton">
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>

            <li className="widgetSmListItem">
                <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className='WdgetSmImg'/>
                <div className="widgetSmProduct">
                    <span className="widgetSmProductname">Tailes</span>
                    <span className="widgetSmProductTitle">Ground floor</span>
                </div>
                <button className="widgetSmbutton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
export default widgetSm