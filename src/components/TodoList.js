import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ items }) {


  return (
    <div className={`todo-list-wrapper`}>

      <ul className="list" >
        {
          items.map(({ text }, index) => {
            return (
              <TodoItem key={index} text={text} />
            )
          })
        }

      </ul>
    </div>
  )
}
