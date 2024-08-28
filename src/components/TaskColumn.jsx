import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import DropArea from "./DropArea";
//  here mapping all tasks here
const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      {/*  here after the status ,0 this is use for the array cause arr first position is 0  */}
      <DropArea onDrop={() => onDrop(status, 0)}></DropArea>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <div key={index}>
              <TaskCard
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                setActiveCard={setActiveCard}
              />
              <DropArea onDrop={() => onDrop(status, index + 1)}></DropArea>
            </div>
          )
      )}
    </section>
  );
};

export default TaskColumn;
