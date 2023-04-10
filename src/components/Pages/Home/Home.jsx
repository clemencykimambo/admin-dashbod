import React from 'react';
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo';
import WidgetLg from '../../widgetLg/WidgetLg';
import WidgetSm from '../../widgetSm/WidgetSm';
import Chart from '../../Chart/Chart';
import './Home.css';

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />

        <Chart />
      <div className="homeWidget">

        < WidgetSm />

        < WidgetLg />

      </div>
    </div>
  )
}
export default Home
