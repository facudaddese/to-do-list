import { useInput } from "../../hooks/useInput";
import Button from "../button/Button";
import Input from "../input/Input";
import { useTasksReducer } from "../../hooks/useTasksReducer";
import Task from "../task/Task";

const TaskContainer = () => {
  const { input, handleInput } = useInput();
  const { state, dispatch } = useTasksReducer();

  return (
    <>
      <h1 className="[grid-area:h1] text-center pt-5 pb-10 text-3xl">
        TO DO LIST
      </h1>
      <div className="[gird-area:input] flex flex-wrap justify-center items-center gap-3 py-2">
        <Input input={input} handleInput={handleInput} />
        <Button
          label="Add task"
          handle={() =>
            dispatch({
              type: "addTask",
              payload: {
                id: crypto.randomUUID(),
                name: input,
                completed: false,
              },
            })
          }
        />
        <Button
          label="Clear tasks"
          handle={() => dispatch({ type: "clearTasks" })}
        />
      </div>
      <Task tasks={state.tasks} dispatch={dispatch} />
    </>
  );
};

export default TaskContainer;
