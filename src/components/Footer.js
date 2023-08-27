import React from 'react'

export default function Footer() {
  let footerStyle = {
    position : "absolute",
    width: "100%"
  }
  return (
    <div className='bg-dark text-white text-center py-3' style={footerStyle}>
        Copyright @2022
    </div>
  )
}
