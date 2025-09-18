import { useState } from "react";
import { Task } from "./types";
import Form from "./Form";
import List from "./List";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <Form addTask={addTask} />
      <List />
    </div>
  );
}
export default Component;
