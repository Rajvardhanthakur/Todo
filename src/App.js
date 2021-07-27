import React, { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';
import './styles/App.scss'

function App() {
  const [items, setItems] = useState([
    {
      "id": 1,
      "text": "Create your plans"
    },])

  const addItem = (item) => {
    setItems([...items, item])
  }

  return (
    <div className={`light container`}>
      <div className="main">
        <Header />
        <Form addItem={addItem} />
        <TodoList items={items} />
      </div>
    </div>
  );
}

export default App;
