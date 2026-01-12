/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = ({subItems, children}) => {
  return (
    <div className="dropdown ml-4" style={{marginTop: "2px"}}>
      {children}
      <div className="dropdown-content">
        {
          subItems.map((el, key) => (
            <Link key={key} to={el.pathname}>{el.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default DropDown