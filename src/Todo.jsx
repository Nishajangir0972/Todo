import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Todo() {
  const [adding, setAdding] = useState("")
  const [tasks, setTask] = useState([])
  const [flag, setFlag] = useState(false)
  const [completed, setCompleted] = useState([])

  function handleTask(e) {
    e.preventDefault();

    if (flag === false)
      setTask([...tasks, adding]);
    else {
      tasks[flag] = adding;
      setTask(tasks)
      setFlag(false)
    }
    setAdding("");
  }

  function handleDelete(e, index) {
    e.preventDefault();
    setTask(
      tasks.filter((value, ind) => {
        return ind !== index;
      })
    );
  }

  function handleEdit(e, index) {
    e.preventDefault();
    setAdding(tasks[index])
    setFlag(index)


  }
  function handleCompleted(e, index) {
    e.preventDefault()
    setCompleted([...completed, index])
  }


  return (
    <>
      <div className="main">
        <form onSubmit={handleTask}>
          <input type="text" placeholder='Enter your task' value={adding} onChange={(e) => setAdding(e.target.value)} />
          <button type='submit'>Add Task</button>
        </form>
        <ul>
          {
            tasks.map((ask, index) => {
              return (
                <li key={index} className={(completed.includes(index)? "completed": "")}>
                  <span>{ask}</span>
                  <p>
                    <a href="" onClick={(e) => handleDelete(e, index)}>
                      <DeleteIcon />
                    </a>
                    <a href="" onClick={(e) => handleEdit(e, index)}>
                      <EditIcon />
                    </a>
                    <a href="" onClick={(e) => handleCompleted(e, index)}>
                      <CheckIcon />
                    </a>
                  </p>
                </li>
              )



            }
            )}

        </ul>
      </div>
    </>

  )
}

export default Todo

