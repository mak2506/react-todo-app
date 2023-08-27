import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import About from "./components/About";
import { AddTodo } from "./components/AddTodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, description) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  

  return (
    <>
      <Router>
        <Header title="Todos List"/>
        <Routes>
          <Route
            path="/"
            element={
                <>
                  <Link to="/add" className="btn btn-light m-3">Add Todo</Link>
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              }
          >
          </Route>
          <Route path="/add" element={<AddTodo addTodo={addTodo} />}>
            
          </Route>
          <Route path="/about" element={<About/>}>
            
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
