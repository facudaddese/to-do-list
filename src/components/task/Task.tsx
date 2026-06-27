import { useEdit } from "../../hooks/useEdit";
import type { TaskProps } from "../../types/task";
import Button from "../button/Button";

const Task = ({ tasks, dispatch }: TaskProps) => {
  const { editName, setEditName, editId, setEditId } = useEdit();

  const handleEdit = (taskId: string, taskName: string) => {
    setEditId(taskId);
    setEditName(taskName);
  };

  const handleSave = (taskId: string) => {
    if (editName.trim() === "") return;

    dispatch({
      type: "editTask",
      payload: { id: taskId, name: editName.trim() },
    });

    setEditId(null);
    setEditName("");
  };

  return (
    <section className="mt-4 px-4 max-w-screen">
      {tasks.map((task) => {
        const isEditing = editId === task.id;
        return (
          <div
            key={task.id}
            className="flex flex-wrap justify-between py-3 px-2 mb-4 border border-gray-300 rounded-[10px] items-center shadow-inner"
          >
            <div className="flex items-center gap-3 max-w-full">
              <input type="checkbox" className="cursor-pointer" />
              {isEditing ? (
                <input
                  type="text"
                  value={editName}
                  onChange={({ target }) => setEditName(target.value)}
                  className="border-b mr-2 focus:outline-0 font-medium"
                />
              ) : (
                <p className="max-w-50 min-w-30 mr-3 wrap-break-word task-name">
                  {task.name}
                </p>
              )}
            </div>
            <div className="flex justify-center items-center gap-2 btns">
              <Button
                label={isEditing ? "Save" : "Edit task"}
                handle={() =>
                  isEditing
                    ? handleSave(task.id)
                    : handleEdit(task.id, task.name)
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
        );
      })}
    </section>
  );
};

export default Task;
