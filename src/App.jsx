import { useState } from 'react'
import './App.css'


const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault();
    
    // function to add notes 
    const newTask = [...task]
    newTask.push({ title, detail });
    setTask(newTask);
    // console.log(newTask);
    

    setTitle('');
    setDetail('');
  }
    
  // function to remove notes 
  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx,1);

    setTask(copyTask);
    
  }
  return (
    <div className='min-h-auto lg:h-screen bg-slate-400 text-slate-800 lg:flex'>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className='flex items-start gap-4 flex-col p-10 lg:w-1/2' >
        <h1 className='text-3xl font-bold text-center w-full'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='border-2 font-medium px-5 py-2 w-full outline-none rounded'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            
          }}
        />

        <textarea
          type="text"
          placeholder='Write Details...'
          className='border-2 font-medium px-5 py-2 h-32 w-full rounded outline-none'
          value={detail}
          onChange={(e) => {
               setDetail(e.target.value)
          }}
        />

        <button
        id='btn'
          className='hover:bg-blue-700 active:scale-98 transition transition-all font-medium px-5 py-2 cursor-pointer w-full rounded outline-none bg-blue-600 text-white'>
          Add Note
        </button>

      </form>
      <div  className='lg:border-l-2 p-10  lg:w-1/2'>
        <h1 className='text-3xl font-bold '>Recent Notes</h1>
        <div id='scrollRemove' className='flex flex-wrap justify-start items-start gap-5 mt-5 overflow-auto lg:h-[90%]'>
          {task.map(function(elem,idx){

            return <div key={idx} id='notePng' className='flex flex-col justify-between items-start relative bg-cover h-52 w-40 rounded-2xl text-black py-6 px-3 lg:shadow-[1px_7px_10px_1px_rgba(0,0,0,0.418)] bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <div>
                <h3 className='text-lg font-bold leading-6'>{elem.title}</h3>
                <p className='text-xs font-semibold leading-tight mt-2 text-gray-600'>{elem.detail}</p>
              </div>
              <button 
              onClick={() => {
                deleteNote(idx)
              }}
              id='btn'
              className='bg-blue-600 cursor-pointer hover:bg-blue-700 active:scale-95 transaction transition-all text-white w-full rounded py-1 text-sm font-semibold'>Remove</button>
            </div>
          })}
          
        </div>
      </div>

    </div>
  )
}

export default App