import {useState } from "react";
export default function TaskInput({setTasks}) {
  const [value, setValue] = useState("");
  const date = new Date();

  const getData = () => {
    if(value.trim()==="")return
    const task = { id:Date.now(), value: value, date: date, isCompleted:false };
    setTasks((tasks)=>[...tasks,task]);
  };
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
      setValue("");
      getData();
  }
  }
   
  return (
    <div className="task-input mt-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add your task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
            setValue("");
            getData();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}


