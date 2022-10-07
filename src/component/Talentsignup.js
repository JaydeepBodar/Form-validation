import React from 'react'
import { Link } from 'react-router-dom';
import Form from '../component/Form'
import '../CSS/Talentsignup.css'
import '../CSS/style.css'
const Talentsignup = () => {
  return (
    <div className="main-wrapper">
    <div className="form-wrapper">
        <div className="nav-links">
            <Link to="/fanpage" className='talent-fanpage'>FAN SIGNUP</Link>
            <Link to="/talentpage" className="talent-talentpage" >TALENT SIGNUP</Link>
        </div>
        <Form />
    </div>
</div>
  )
}

export default Talentsignup