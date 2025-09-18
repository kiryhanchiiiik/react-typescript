import { useState } from "react";
import { Task } from "./types";
import Form from "./Form";
import List from "./List";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div>
      <Form />
      <List />
    </div>
  );
}
export default Component;
