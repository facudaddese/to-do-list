import type { Task } from "../../types/task";

interface InfoTasksProps {
  tasks: Task[];
}

const InfoTasks = ({ tasks }: InfoTasksProps) => {
  return (
    <div className="[grid-area:info] flex items-center justify-around w-full mt-5">
      <strong>Tasks: {tasks.length}</strong>
      <strong>
        Completed: {tasks.filter((el) => el.completed === true).length}
      </strong>
      <strong>
        Pending: {tasks.filter((el) => el.completed === false).length}
      </strong>
    </div>
  );
};

export default InfoTasks;
