import { useInput } from "../../hooks/useInput";
import Button from "../button/Button";
import Input from "../input/Input";
import InfoTasks from "../infoTasks/InfoTasks";
import { useTasksReducer } from "../../hooks/useTasksReducer";
import Task from "../task/Task";

const TaskContainer = () => {
  const { input, handleInput, setInput } = useInput();
  const { state, dispatch } = useTasksReducer();

  const handleAdd = () => {
    if (input.trim() === "") return alert("Insert a task to continue.");
    if (state.tasks.some((el) => el.name.toLowerCase() === input.toLowerCase()))
      return alert("The task already exists.");

    dispatch({
      type: "addTask",
      payload: {
        id: crypto.randomUUID(),
        name: input.trim(),
        completed: false,
      },
    });

    setInput("");
  };

  return (
    <>
      <h1 className="[grid-area:h1] text-center uppercase pt-5 pb-10 text-3xl">
        task manager
      </h1>
      <div className="[gird-area:input] flex flex-wrap justify-center items-center gap-2 py-2">
        <Input input={input} handleInput={handleInput} />
        <Button label="Add task" handle={handleAdd} />
        <Button
          label="Clear tasks"
          handle={() => dispatch({ type: "clearTasks" })}
          disabled={state.tasks.length === 0}
        />
      </div>
      <Task tasks={state.tasks} dispatch={dispatch} />
      <InfoTasks tasks={state.tasks} />
    </>
  );
};

export default TaskContainer;
