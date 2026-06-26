import type { TaskProps } from "../../types/task";
import Button from "../button/Button";

const Task = ({ tasks, dispatch }: TaskProps) => {
  return (
    <ul className="mt-4 px-4 max-w-screen">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-wrap justify-between py-3 px-2 mb-4 border border-gray-300 rounded-[10px] items-center shadow-inner"
        >
          <div className="flex flex-1 items-center gap-3">
            <input type="checkbox" className="cursor-pointer" />
            <li className="min-w-30 mr-3">{task.name}</li>
          </div>
          <div className="flex justify-center items-center gap-4 btns">
            <Button
              label="Edit task"
              handle={() =>
                dispatch({
                  type: "editTask",
                  payload: { id: task.id, name: task.name },
                })
              }
            />
            <Button
              label="Delete task"
              handle={() =>
                dispatch({
                  type: "deleteTask",
                  payload: task.id,
                })
              }
            />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default Task;
