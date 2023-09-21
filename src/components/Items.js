import React from 'react'

function Items(props) {
  return (
    <>
        {props.items.map(item => (
            <tr key={item.id} onClick={() => alert(`${item.name} ${item.price}`)}>
                <td>{item.name}</td>
                <td>{`$${item.price}`}</td>
            </tr>
        ))}
    </>
  )
}

export default Items
