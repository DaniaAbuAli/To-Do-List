import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import MyCalendar from "./components/MyCalendar";
import Filter from "./components/Filter";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import Task from "./components/Task";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = useState(new Date());
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    document.body.style.backgroundColor = "#e1e1e1";
  }, []);

  return (
    <>
      <h1 className="text-center mt-5 p-3 title">To-Do List </h1>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-7">
            <TaskInput setTasks={setTasks} />
            <Filter value={value} tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="col-lg-4">
            <div className="d-none d-lg-block">
              <MyCalendar setValue={setValue} value={value} />
            </div>
            <Modal value={value} setValue={setValue} />
            <span
              className="toggler d-block d-lg-none"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <svg
                className="svg"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
