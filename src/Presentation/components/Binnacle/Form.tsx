import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState(''); 

  return (
    <div>
        <form>
        <div className='form-group'>
                    <label htmlFor="titulo">Name</label>
                    <input type="text" id="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        </form>
    </div>
  )
}
