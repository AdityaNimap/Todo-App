import React, { useEffect, useState } from 'react'

const App = () => {
  const [allTask,setAllTask]= useState([]);
  const [task,setTask]=useState("");
  const API = "http://localhost:8080/Todo"
  const fetchData = async (url)=>{
    const resp = await fetch(url)
    const data = await resp.json();
    // console.log(data)
    setAllTask(data)
  }
  useEffect(()=>{
    fetchData(API);
  },[])
  const submitTask = ()=>{
  
    fetch(API,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      },
      body: JSON.stringify("resp",task)
    })
      .then((resp)=>console.log(resp))
  }
  return (
    <div>
      <input type='text' name='task' value={task} onChange={(e)=> setTask(e.target.value)}></input>
      <button onClick={submitTask}>Add Task</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
      {
        allTask.map((currTask)=>{
          return <tr key={currTask.id}>
            <td>{currTask.id}</td>
            <td>{currTask.task}</td>
          </tr>
        })
      }
      </tbody>
      </table>
    </div>
  )
}

export default App
