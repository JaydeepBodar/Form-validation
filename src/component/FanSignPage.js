import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/FanSignpage.css'
import '../CSS/style.css'
import Form from '../component/Form'
const FanSignPage = () => {
    return (
        <div className="main-wrapper">
            <div className="form-wrapper">
                <div className="nav-links">
                    <Link to="/fanpage" className='fanpage'>FAN SIGNUP</Link>
                    <Link to="/talentpage" className="talentpage" >TALENT SIGNUP</Link>
                </div>
                <Form />
            </div>
        </div>
    )
}

export default FanSignPage