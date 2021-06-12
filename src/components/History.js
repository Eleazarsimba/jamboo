import React from 'react'
import Date from '../History_comp/Date';

const History = () => {
    return (
        <div className="MainDiv">
            <div className="historyinfo">
                <h3 style={{paddingLeft:'20px', paddingTop:'10px'}}>History</h3>
            </div>
            <div>
                <Date />
            </div>
            
        </div>
    )
}

export default History
