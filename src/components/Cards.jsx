import React from 'react'


const Cards = ({title, text, icon, mode}) => {
  return (
    <div className={`${mode ? "card-con-light": "card-con-dark" }`}>
      <div className='card-icon'>{icon}</div>
      <h3 className='card-head'>{title}</h3>
      <p className='card-para'>{text}</p>
    </div>
  )
}

export default Cards