import React, {useState} from 'react';

export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !description){
            alert("Title or description is required");
            window.exit();
        } else {
            setTitle("");
            setDescription("");
        }
        props.addTodo(title, description);
        alert("Todo added successfully");
        window.location.assign("/");
    }

  return (
    <div className='container p-3'>
        <h2 className='text-center'>Add New Todo</h2><hr/>
    <form onSubmit={submit}>
    <div className="mb-3">
        <label htmlFor="text" className="form-label">Todo Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
        <label htmlFor="desc" className="form-label">Description</label>
        <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="description"></textarea>
    </div>
    <div className="text-center"><button type="submit" className="btn btn-success w-25">Add</button></div>
    </form>
    </div>
  )
}
