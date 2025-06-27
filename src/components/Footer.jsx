/* eslint-disable react/prop-types */
import React from 'react'

const Footer = () => {
  const isHome = window.location.pathname == "/";
  return (
    <footer style={{ backgroundColor: isHome ? "#fff" : "#eee", color: "#333"}}>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Copyright &copy; E2A 2024. All Rights Reserved.</p>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Designed by Rupantar Borphukan, 4th Year, NITS || Photo Credits to Obiettivo, Photography Club of NITS</p>
    </footer>
  )
}

export default Footer
