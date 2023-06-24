import React from 'react';
import { useState } from 'react';

const InputTask = ({tasks,setTasks,setView}) => {
    const [text, setText] = useState('')
    const [warn, setWarn] = useState(false);
    const handleSubmit=()=>{
        if(text.length===0){
            setWarn(true)
        }
        else{
            setTasks([...tasks,text])
            setText('')
            setWarn(false)
            setView(false)
        }

    }
    return (
        <div className='bg-black/50 h-screen absolute top-0 left-0 w-full flex flex-col justify-center items-center'>
            <div className='h-fit w-full md:w-1/2 bg-amber-400 py-4 rounded relative'>
                <div className='text-center text-3xl font-serif rounded'>New Task</div>
                <div className=' w-[80%] mx-auto h-40 rounded flex flex-row justify-evenly items-center'>
                    <input type="text" className='h-12 p-4 w-full mr-4 hover:border hover:border-black active:border-black active:border' value={text} onChange={(e)=>setText(e.target.value)}/>
                    <button onClick={handleSubmit} className='pb-2 px-4 h-12 text-3xl border border-amber-950 flex justify-center items-center rounded hover:bg-blue-400'> {'>'}</button>
                </div>
                {warn && <div className='text-lg text-red-700 text-center animate-pulse '>Task is Empty</div>}
                <button onClick={()=>setView(false)} className='px-2 pb-1 text-xl w-8 h-8 border border-amber-950 flex justify-center items-center rounded-full hover:bg-blue-400 absolute top-2 right-2'>❌</button>
            </div>
        </div>
    );
};

export default InputTask;
