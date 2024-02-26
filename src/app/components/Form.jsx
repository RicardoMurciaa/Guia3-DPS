"use client"
import React, { useState } from "react";
import Todo from "./Todo";
import styles from "../page.module.css";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  const handleChange = (e) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  const handleClick = (e) => {
    e.preventDefault();
    if (
      !todo.name ||
      !todo.brand ||
      !todo.quantity ||
      !todo.price ||
      todo.name.trim() === '' ||
      todo.brand.trim() === '' ||
      todo.quantity.trim() === '' ||
      todo.price.trim() === ''
    ) {
      alert("Por favor, completa todos los campos");
      return;
    }
    setTodos([...todos, todo]);
    setTodo({});
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <form>
        <label>Nombre del Producto</label>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          onChange={handleChange}
          value={todo.name || ""}
        />

        <label>Marca</label>
        <input
          className={styles.form_input}
          type="text"
          name="brand"
          onChange={handleChange}
          value={todo.brand || ""}
        />

        <label>Cantidad</label>
        <input
          className={styles.form_input}
          type="text"
          name="quantity"
          onChange={handleChange}
          value={todo.quantity || ""}
        />

        <label>Precio</label>
        <input
          className={styles.form_input}
          type="text"
          name="price"
          onChange={handleChange}
          value={todo.price || ""}
        />

        <button className={styles.form_button} onClick={handleClick}>
          Agregar
        </button>
      </form>

      {todos.map((value, index) => (
        <Todo
          todo={value}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
