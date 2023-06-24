import React from 'react';

const CompletedTasks = ({completedTasks,setViewCompleted}) => {
    console.log(completedTasks)

    return (
        <div className='bg-black/50 h-screen absolute top-0 left-0 w-full flex flex-col justify-center items-center'>

            <div className='my-2 w-1/2 bg-amber-400 h-1/2 flex flex-col justify-center items-center px-2 rounded relative'>
                <div className='text-center font-serif text-3xl my-4'>Completed Tasks</div>
                <hr className='border border-black mx-2 my-1 w-full'/>
                <div className='h-full w-full flex flex-col justify-start items-start'>
                    {completedTasks.map((task,index) =>{
                        return (<div className=' flex flex-row h-fit py-1 border-y border-dashed border-black my-1 w-full justify-around items-center' key={index}>
                            <div className='text-xl border border-black rounded px-2 mx-4 pb-1 min-h-fit w-full text-center'>{task}</div>
                        </div>)
                    })}
                    {
                        completedTasks.length===0 && <div className='flex flex-col h-1/2 justify-evenly items-center w-full'>... Let's Start Working ! ...<div className='text-6xl'>🔥</div></div>
                    }
                </div>
                <button onClick={()=>setViewCompleted(false)} className='px-2 pb-1 text-xl w-8 h-8 border border-amber-950 flex justify-center items-center rounded-full hover:bg-blue-400 absolute top-2 right-2'>❌</button>
            </div>

        </div>
    );
};

export default CompletedTasks;
