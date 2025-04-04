import { useState,useRef, useEffect} from "react";

export default function Task({tasks,task,setTasks}) {
    const [edit,setEdit]=useState(false);
    const [newValue,setNewValue]=useState(task.value);
    const inputRef=useRef(null);
    
    const change=()=>{
       setTasks(
        tasks.map((todo)=>todo.id===task.id?{...todo,isCompleted:!todo.isCompleted}:todo))
    }
    const remove=()=>{
       setTasks(tasks.filter((todo)=>todo.id!==task.id))
    }
    const handleBlur=()=>{
      setTasks(
        tasks.map((todo) =>
          todo.id === task.id ? { ...todo, value: newValue } : todo)
      )
      setEdit(false)
    }

    useEffect(()=>{
      if(edit)inputRef.current.focus();
    },[edit])

  return (
    <div className="task d-flex mt-2">
      <input type="checkbox" className="me-2" onChange={change} checked={task.isCompleted}/>
      <input type="text" className="me-2" value={newValue} readOnly={!edit} ref={inputRef} onChange={(e)=>setNewValue(e.target.value)} onBlur={handleBlur} />
      <div className="icons d-flex gap-2 justify-content-center align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
          onClick={()=>setEdit(true)}
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          className="bi bi-trash3"
          viewBox="0 0 16 16"
          onClick={remove}
        >
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
        </svg>
      </div>
    </div>
  );
}
