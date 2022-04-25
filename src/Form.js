import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
  return (
    <div>
        <input type="text" placeholder='name...' value={name} onChange={() => setName()} />
        <input type="text" placeholder='age...' value={age} onChange={() => setAge()} />
        <button>
    </div>
  )
}

export default Form