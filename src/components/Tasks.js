import Task from './Task';

const Tasks = ({tasks, onDelete, onToogle}) => {
  return (
    <>
        <div className="task-box">
            {tasks.map((task) => (
              <Task onToogle={()=> onToogle(task.id)} onDelete={()=> onDelete(task.id)} key={task.id} task={task}/>
            ))}
        </div>{/*task-box*/}
    </>
  )
}

export default Tasks