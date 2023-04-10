import React from 'react';
import {ArrowCircleDown, ArrowCircleUp} from '@mui/icons-material';

import './FeaturedInfo.css';

 function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Sales </span>
            <div className="featuredMoneyCoontainer">
              <span className="featuredMoney">Tsh 500,000</span>
              <span className="featuredMoneyrate">
                -11.4 < ArrowCircleDown className='featuredIcon' /> 
              </span>
            </div>
            <span className="featuredSub">Compare to the last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">products </span>
            <div className="featuredMoneyCoontainer">
              <span className="featuredMoney">Tsh 900,000</span>
              <span className="featuredMoneyrate">
                +11.4 < ArrowCircleUp className='featuredIcon2' />
              </span>
            </div>
            <span className="featuredSub">Compare to the last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Stock inn </span>
            <div className="featuredMoneyCoontainer">
              <span className="featuredMoney">Tsh 1,000,000</span>
              <span className="featuredMoneyrate">
                +25.4 < ArrowCircleUp className='featuredIcon2'/>
              </span>
            </div>
            <span className="featuredSub">Compare to the last month</span>
        </div>
    </div>
  )
}
export default FeaturedInfo