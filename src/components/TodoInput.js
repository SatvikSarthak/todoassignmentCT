import React, { useState } from 'react'


const TodoInput = ({onAddTask}) => {
 
    const [task,setTask] = useState('');
    const handleSubmit= (e)=>{
       e.preventDefault();
       if(task.trim()===""){
        alert("Please enter a task");
        return;
       }

       if(onAddTask){
        onAddTask(task);
             }
       setTask("");
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className='flex flex-row'>

        <input className='border-solid border-2' type='text' value={task} onChange={(e)=>setTask(e.target.value)} name='taskInput'/>
        <button className='px-2'>Add</button>
      </div>
       
    </form>
    </>
  )
}

export default TodoInput