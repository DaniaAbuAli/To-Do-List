import Task from "./Task";
import { useState } from "react";

export default function Filter({value,tasks,setTasks}) {
  const [all,setAll]=useState(true);
  const [active,setActive]=useState(false);
  const [complete,setComplete]=useState(false)

  const calendarDay=value.getDate();
  const calendarMonth=value.getMonth();
  const calendarYear=value.getFullYear();

  let filteredTasks=tasks.filter((task)=>{
    const date=new Date(task.date);
    const taskDay=date.getDate();
    const taskMonth=date.getMonth();
    const taskYear=date.getFullYear();
    return calendarDay===taskDay&&calendarMonth===taskMonth&&calendarYear===taskYear;
  })
  filteredTasks=filteredTasks.filter((task)=>{
    if(all)return true;
    if(complete)return task.isCompleted;
    if(active)return !task.isCompleted;
    return true
  })

  return (
    <>
     <div className="filter p-2 d-flex justify-content-between">
      <h4>Tasks</h4>
      <div className="categories d-flex gap-2">
        <p className={all?"active":""} onClick={()=>{
            setAll(true);
            setActive(false);
            setComplete(false)
        }}>All</p>
        <p className={active?"active":""} onClick={()=>{
            setAll(false);
            setActive(true);
            setComplete(false);
        }}>Active</p>
        <p className={complete?"active":""} onClick={()=>{
            setAll(false);
            setActive(false);
            setComplete(true);
        }}>Completed</p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-funnel-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
          </svg>
        </p>
      </div>
    </div>
    <div className="show-tasks mt-2">
        {filteredTasks.length===0?<p className="text-center message">No tasks added for this date.</p>:
        filteredTasks.map((task)=>{
          return <Task tasks={tasks} task={task} setTasks={setTasks}  key={task.id}/>
        })}
    </div>
    </>
  );
}

