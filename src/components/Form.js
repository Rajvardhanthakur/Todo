import React, { useState } from 'react'

export default function Form({ addItem }) {
  const [text, setText] = useState('')
  const onSubmit = (evt) => {
    evt.preventDefault()
    const item = {
      "id": 4,
      "text": text
    }
    addItem(item)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`input-wrapper`}>
        <input aria-label="Create a new todo..." type="text" value={text} placeholder="Create a new todo..." onChange={evt => setText(evt.target.value)} />
      </div>
    </form>
  )
}
