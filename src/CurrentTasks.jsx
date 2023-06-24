import React, {useState} from 'react';
import InputTask from './InputTask';
import EditTask from './EditTask';
import CompletedTasks from "./CompletedTasks";


const CurrentTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([])
    const [view, setView] = useState(false)
    const [viewCompleted, setViewCompleted] = useState(false);
    const [edit, setEdit] = useState(false)
    // const editIndex = useRef(null)
    const [editIndex, setEditIndex] = useState(null);

    const handleAdd = ()=>{
        setView(true)

    }
    const handleDelete = (index)=>{
        setTasks(tasks.filter((e, i) => i !== index))
    }
    const handleCompleted=(index)=>{
        setCompletedTasks([...completedTasks,tasks[index]])
        handleDelete(index)
        setViewCompleted(false)
    }
    const handleEdit = (index)=>{
        setEditIndex(index)
        setEdit(true)

    }
    return (
        <div className='bg-blue-400 h-screen w-full flex flex-col justify-center items-center '>
            <div className='bg-amber-400 h-1/2 w-full md:w-1/2  px-4 rounded'>
                <div className='text-center font-serif text-3xl my-4'>ToDo App</div>
                <hr className='border border-black mx-2'/>
                <div className='my-2 '>
                    {tasks.map((task,index) =>{
                        return (<div className=' flex flex-row h-fit py-1 border-y border-dashed border-black my-1 w-full justify-around items-center' key={index}>
                            <div className='text-xl border border-black rounded px-2 mx-4 pb-1 min-h-fit w-full text-center'>{task}</div>
                            <div className='flex flex-row justify-evenly items-center space-x-2.5 w-fit mx-2'>
                                <button onClick={()=>handleCompleted(index)} disabled={false} className=' px-4 h-8 text-lg border border-amber-950 flex justify-center items-center rounded hover:bg-blue-400'>Done</button>
                                <button onClick={()=>handleEdit(index)} disabled={false}   className=' px-4 h-8 text-lg border border-amber-950 flex justify-center items-center rounded hover:bg-blue-400'>Edit</button>
                                <button onClick={()=>handleDelete(index)} disabled={false}   className=' px-4 h-8 text-lg border border-amber-950 flex justify-center items-center rounded hover:bg-blue-400'>X</button>
                            </div>
                        </div>)
                    })}
                </div>

                {
                    view && <InputTask tasks={tasks} setTasks={setTasks} setView={setView}/>
                }
                {
                    edit && <EditTask tasks={tasks} editIndex={editIndex} setEdit={setEdit} setTasks={setTasks}/>
                }
                {
                    viewCompleted && <CompletedTasks completedTasks={completedTasks} setViewCompleted={setViewCompleted} setTasks={setTasks}/>
                }
                {
                    tasks.length ===0 && <div className='flex flex-col h-1/2 justify-evenly items-center'>... No Tasks Here ! Yay ! ...<div className='text-6xl'>😃</div></div>
                }
            </div>
            <div className='bg-lime-400 h-fit w-full md:w-1/2 md:mx-auto px-4 py-4 mt-2 rounded flex flex-row justify-between items-center space-x-2.5 mx-8'>
                <button onClick={handleAdd} disabled={false} className=' px-4 py-2 text-lg border border-amber-950 flex justify-center items-center rounded hover:bg-amber-400'>Add Task</button>
                <button onClick={()=>setViewCompleted( true)} disabled={view} className=' px-4 py-2 text-lg border border-amber-950 flex justify-center items-center rounded hover:bg-amber-400'>Completed Tasks</button>
            </div>
        </div>
    );
};

export default CurrentTasks;
