import React from 'react'
import classes from './user.css'

const User = (props) => {
  return (
    <div className= 'profile-card'>
        <li className = {classes.item}>
            <img src= {props.img} alt='img'/>
            <h3>{props.name}</h3>
            <div className={props.details}>
                {props.department}
            </div>
            <div className= {classes.details}>
                {props.dob}
            </div>
        </li>
    </div>
     )
}

export default User