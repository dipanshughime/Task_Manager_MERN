import React from 'react'
import {BsTrash} from 'react-icons/bs'
import {RxUpdate} from 'react-icons/rx'
import { useState } from 'react'
const Item = (props) => {
    const[done,setDone]=useState(false);

    const removeToDo=(id)=>{
        console.log(id);
        const newToDo = props.todos.filter(
         (d,index)=>{
           if(index !== id){
             return true;
           }else{
             return false;
           }
           }
       )
       props.setTodos(newToDo);
    }

    
  return (
    <div onClick={()=> setDone(!done)} className={` select-none cursor-pointer w-full border-b p-3 bg-gray-900 rounded-3xl flex justify-between items-center`}>
       <div>
        <span className='px-2 text-[12px] text-slate-50'>
          {props.time}
        </span>

        <span className={`${done===true ? 'line-through':''} text-white px-2 py-2 text-xl`}>
           {props.item}
        </span>
       </div>

       <div className='text-white px-2 py-2 flex '>
        <span className='px-5 text-white'>
        <RxUpdate/>
        </span>

        <span onClick={() => removeToDo(props.id)}>
            
         <BsTrash/>
        </span>
       </div>

       {/* <div className='text-white'>
         <GrDocumentUpdate/>
       </div> */}

    </div>
  )
}

export default Item
