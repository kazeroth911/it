import React from 'react'

function Header(props) {
  return (
    <tr style={{
        fontWeight:'bold',
        color:'red'
    }}>
        <td>Name</td>
        <td>Price</td>
        <td style={{paddingLeft:'20px'}} >Stock</td>
    </tr>
  )
}

export default Header
