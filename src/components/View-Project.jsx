import { useState, useRef } from "react";
import Task from "./Task";

export default function Viewproject({entry , del}) {
  console.log(entry.name);

  const taskref =useRef();
  const [state,setstate] =useState(false);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month}, ${year}`;
  }

  function handletask(task){
     entry.tasks.push(task);
     taskref.current.value="";
     setstate((prev)=>!prev);
  }

  function handleclear(index){
    delete entry.tasks[index];
    setstate((prev)=>!prev);
  }

  return (
    <div class="flex flex-col h-full flex-grow view">
      <div class="grid grid-cols-2 place-content-between gap-4">
        <div class="flex justify start  title">
          <h2>{entry.name}</h2>
        </div>
        <p class="flex justify-end">
          <button onClick={()=>del(entry)} class="del">Delete</button>
        </p>
      </div>
      <p class="date-due">{formatDate(entry.due)}</p>
      <p class="project-description">
       { entry.description}
      </p>
      <hr />
      <div class="flex task-section flex-col">
        <h2 class="task">Tasks</h2>
        <p class="add-task flex flex-row gap-5">
          <input ref={taskref} type="text" id="task-input" name="task"></input>
          <button onClick={()=>handletask(taskref.current.value)}>Add Task</button>
        </p>
        <ul>
            {entry.tasks.map((el,ind) => (
              <Task key={ind} clear={handleclear} index={ind}>{el}</Task>
            ))}
        </ul>
      </div>
    </div>
  );
}
