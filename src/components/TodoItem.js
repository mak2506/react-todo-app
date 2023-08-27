import React, {useState} from 'react';

export default function TodoItem({todo, onDelete}) {

  let checkStyle= {
    width: "100px",
    padding: "5px",
  }

  let [mark, setMark] = useState("");

  const markDone = (param) => {
    console.log('Mark done');
    console.log(param);
  };

    return (
      <div className=''>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
        <div>
        <input type="checkbox" name="mark" id="mark" style={checkStyle} onChange={()=>{markDone('done')}}/>
        <button className='btn btn-danger' onClick={()=> {onDelete(todo)}}>Delete</button>
        </div>
      </div>
    )
  }

