import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
  //console.log(props.todos);
  return (
    <>
     <div className='container d-flex justify-content-center flex-wrap'>
      {props.todos.length === 0? <h4>No todos to display</h4> :
      props.todos.map((todo)=> {
          return (          
          <div className="card m-auto my-3 bg-warning col-lg-3 col-md-4 col-sm-6 mx-2">
          <div className="card-body text-center">
          <TodoItem todo={todo} key={todo.sno} onDelete= {props.onDelete}/>
          </div>
         </div>
         
          )
        
      })}
      
    </div>
    </>
  )
}
