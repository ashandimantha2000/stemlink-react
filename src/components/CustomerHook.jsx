import React, { useState } from 'react'

function CustomerHook() {
    const [name, setName] = useState()
  return (
    <div>
        <input type="text" placeholder='enter your name' onChange={e=>setName(e.target.value)} />
        <h4>Your name is {name}</h4>
    </div>
  )
}

export default CustomerHook