import { FaTimesCircle } from 'react-icons/fa';

const Task = ({task, onDelete, onToogle}) => {
  return (
    <div className='tasks' onDoubleClick={onToogle}>
        <h3>{task.text}</h3> <span className='delete' onClick={onDelete}><FaTimesCircle /></span>
        <p>{task.day}</p>
        <div className={`no-class ${task.reminder ? 'task-reminder' : ''}`}></div>
    </div>
  )
}

export default Task