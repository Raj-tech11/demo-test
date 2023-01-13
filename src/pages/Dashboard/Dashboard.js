import { useState } from "react";

const Dashboard = () => {
  const [todo, setToDo] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const handleInputChange = (event) => {
    console.log("handleInputChange", event.target.value);
    setTaskValue(event.target.value);
  };

  const handleAdditem = () => {
    const taskItems = [...todo];
    taskItems.push(taskValue);
    setToDo(taskItems);
    setTaskValue("");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>TO DO</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input type="text" value={taskValue} onChange={handleInputChange} />
        <button onClick={handleAdditem}>Add</button>
        <ul>
          {todo.map((todoItem) => {
            return <li>{todoItem}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
