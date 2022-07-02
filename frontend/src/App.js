import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  return (
    <div>
      <Navbar bg="light" style={{
        marginBottom: "20px"
      }}>
          <Container>
            <Navbar.Brand href = "#">
              Todo App
            </Navbar.Brand>
          </Container>
      </Navbar>
      <Container>
       <TodoForm />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
