import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle})=>{
    return ( 
        <>
        {tasks.map((task, index)=> 
        (<Task onToggle={onToggle} key = {index} task={task} onDelete={onDelete}/>))}
        
        </>
    )
}

export default Tasks;