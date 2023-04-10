import React from 'react'
import './widgetLg.css'

 function widgetLg() {

  

  return (
    <div className='widgetLg'>
        <div className="widgetLgTitle">Last Transactions</div>
        <table className="widgetLgTable">
          <tr className="widgetLgTR">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>

          <tr className="widgetLgTabl">
            <td className="widgetLgUser">
              <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Clemency Kimambo</span>
            </td>
            <td className="widgetLgDate">21 jan 2023</td>
            <td className="widgetLgAmount">Tsh 30,000</td>
            <td className="widgetLgStatus">
              <button className="approved">Approved</button>
            </td>
          </tr>

          <tr className="widgetLgTabl">
            <td className="widgetLgUser">
              <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Clemency Kimambo</span>
            </td>
            <td className="widgetLgDate">21 jan 2023</td>
            <td className="widgetLgAmount">Tsh 30,000</td>
            <td className="widgetLgStatus">
              <button className="pending">Pending</button>
             </td>
          </tr>

          <tr className="widgetLgTabl">
            <td className="widgetLgUser">
              <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Clemency Kimambo</span>
            </td>
            <td className="widgetLgDate">21 jan 2023</td>
            <td className="widgetLgAmount">Tsh 30,000</td>
            <td className="widgetLgStatus">
              <button className="Declined">Declined</button>
             </td>
          </tr>

          <tr className="widgetLgTabl">
            <td className="widgetLgUser">
              <img src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg" alt="" className="widgetLgImg" />
              <span className="widgetLgName">Clemency Kimambo</span>
            </td>
            <td className="widgetLgDate">21 jan 2023</td>
            <td className="widgetLgAmount">Tsh 30,000</td>
            <td className="widgetLgStatus"> 
             <button className="approved">Approved</button>
            </td>
          </tr>
        </table>
    </div>
  )
}
export default widgetLg