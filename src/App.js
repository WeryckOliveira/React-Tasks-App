import Header from './components/Header';
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import './App.css'
kkk
function App() {
  const[tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Study for exams',
      day: '18:00 Wednesday 09/10',
      reminder: false
    },

    {
      id: 2,
      text: 'Go buy the birthday present',
      day: '13:00 Wednesday 15/10',
      reminder: false
    },

    {
      id: 3,
      text: 'Birthday party',
      day: '20:00 Wednesday 20/10',
      reminder: false
    }
  ])

  //const[toogle, setToggle] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask]);
  }

  const taskToogle = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  return (
    <div className='background'>
        <Header />
        <AddTask onAdd={addTask} />

        <Tasks onToogle={taskToogle} onDelete={deleteTask} tasks={tasks}/>
    </div>
  );
}

export default App;
