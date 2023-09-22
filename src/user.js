import React from 'react'
import classes from './user.module.css'

const User = (props) => {
  return (
    <div className= {classes.profilecard}>
        <li className = {classes.item}>
            <img src= {props.img} className= {classes.userimg} alt='img'/>
            <h3>{props.name}</h3>
            <div className={props.details}>
                {props.department}
            </div>
            <div className= {classes.details}>
                {props.dob}
            </div>
            <button>Click Here</button>
        </li>
    </div>
     )
}

export default User