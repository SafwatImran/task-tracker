import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask'

function App() {
  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : 'Hi',
        day :'Feb 22nd at 2:30pm',
        reminder : true
    },
    {
        id : 2,
        text : 'Hello',
        day :'Feb 23rd at 2:30pm',
        reminder : false
    },
    {
        id : 3,
        text : 'Bye',
        day :'Feb 24th at 2:30pm',
        reminder : true
    }])
    const addTask = () =>{

    }
    //Delete task
    const deleteTask = (id) =>{
      setTasks(tasks.filter((task)=>task.id!==id))
    }
    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=>task.id===id? 
      {...task, reminder:!task.reminder}:task))
    }
  return (
    <div className="container" >
      <Header/>
      <AddTask></AddTask>
      {tasks.length >0 ?
      (<Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
        >
        </Tasks>)
      : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
