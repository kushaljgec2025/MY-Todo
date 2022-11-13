
import './App.css';
import Header from './myComp/Header';
import Footer from './myComp/Footer';
import React, { useState, useEffect } from 'react';
import Todos from './myComp/Todos';
import { AddTodo } from './myComp/AddTodo';
import About from "./myComp/About";
import wallpaper from './img/wallpaper.jpg';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

const App = () => {
  let myStyle = {
    backgroundImage: `url(${wallpaper})`,
  
    // backgroundColor:'black',
  };
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos") === null)
  }
  const onDelete = (todo) => {
    console.log("DELETE todo", todo)

    // let index=todos.indexOf(todo);
    //  todos.splice(index,1);
    setTodos(todos.filter((e) => { return e !== todo; }))
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (titel, des) => {
    console.log("ADD todo", titel, des)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      titel: titel,
      des: des,
    }
    setTodos([...todos, myTodo]);
    console.log("opps!")
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (

    <Router>
      <div style={myStyle}>
          <Header />
          <Routes>
            <Route exact path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                </>
            }/>
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <Footer /> */}
      </div>
    </Router>


  );
}

export default App;
