import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task");
      return;
    }
    // add task
    console.log(text);

    setText("");
  };

  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
};

export default Form;
