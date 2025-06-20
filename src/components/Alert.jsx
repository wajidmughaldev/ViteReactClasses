

 const Alert=()=>{
    return(
      <div className='m-4 w-[25%] text-center py-5 bg-stone-100 rounded-xl border border-stone-500'>
        <h1 className='mb-3 text-xl'> Do you want to Delete?</h1>
        <button className='bg-blue-700 text-white px-3 py-2 text-sm rounded-sm me-2'>No Keep it.</button>
        <button className='border border-red-500 text-red-500 px-3 py-2 text-sm rounded-sm'>Yes Delete it.</button>
      </div>
    )
  }
  
export default Alert