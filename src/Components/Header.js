import React, { useState, useEffect } from 'react'

export const Header = (props) => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div className='container-fluid' style={{ textAlign: 'center', marginTop: 80 }}>
            <div className='row'>
                <div className='col-md-2'>
                    <button className="btn btn-warning" disabled={true} style={{ display: 'inline', float: 'left', borderRadius: 20 }}>Date : {date.toDateString()} </button>
                </div>
                <div className='col-md-8'>
                    <b style={{ fontSize: 40 }}>-- {props.headline} --</b>
                </div>
                <div className='col-md-2'>
                    <button className="btn btn-warning" disabled={true} style={{ display: 'inline', float: 'right', borderRadius: 20 }}>Time : {date.toLocaleTimeString()}</button>
                </div>
            </div>
        </div>
    )
}

export default Header