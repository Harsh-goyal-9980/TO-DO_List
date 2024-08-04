"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desp, setdesp] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler = (e) => {
    e.preventDefault()
    setmaintask([...maintask, { task, desp }])
    settask("")
    setdesp("")
  }
  const deletehandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask = <h2>No task available</h2>
  if(maintask.length > 0){
  rendertask = maintask.map((t, i) => {
    return (
      <li key={i} className='flex items-center justify-between'>
        <div className='flex justify-between mb-5 gap-36'>
          <h5 className='text-xl font-semibold'>{t.task}</h5>
          <h5 className='text-xl font-semibold'>{t.desp}</h5>
        </div>
        <button onClick={()=>{
          deletehandler(i)
        }} className=' border px-3 py-2 bg-black rounded-xl font-semibold text-white'>Delete</button>
      </li>)
  })}
  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl font-semibold text-center'>My Todo List</h1>
      <form onSubmit={submithandler} className='text-center'>
        <input type="text" placeholder="Enter task here..."
          className='text-xl border-zinc-800 border-2 px-4 py-2 rounded-2xl m-6'
          value={task}
          onChange={(e) => {
            settask(e.target.value)
          }}
        />
        <input type="text" placeholder="Enter description here..."
          className='text-xl border-zinc-800 border-2 px-4 py-2 rounded-2xl m-6'
          value={desp}
          onChange={(e) => {
            setdesp(e.target.value)
          }} />
        <button className='bg-black text-xl text-white px-4 py-2 rounded-2xl m-5'>Add Task
        </button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200 rounded-xl font-semibold text-gray-900'>
        <ul>{rendertask}</ul>
      </div>
    </>
  )
}

export default page
