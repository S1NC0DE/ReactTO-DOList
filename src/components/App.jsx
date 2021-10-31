import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  function handleChange(event) {
         const newItem = event.target.value
         setItem(newItem)
  
  }

  function addItem(){
    setItems((prevItems) => {
      return [...prevItems, item]
    })

    setItem("")
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { items.map((todoItem) => {
            return <li>{todoItem}</li>

          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
