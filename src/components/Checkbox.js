import React from 'react'

function Checkbox() {
  return (
    <div>
        <input type='checkbox'onChange={(e)=> console.log(e.target.checked)} />
        <span>Only show products in stock</span>
    </div>
  )
}

export default Checkbox
