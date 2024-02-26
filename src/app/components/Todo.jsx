import React from "react";
import styles from "../page.module.css";

const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <>
      <div className={styles.list}>
        <div className={styles.productInfo}>
          <h3 className={styles.productName}>Producto: {todo.name}</h3>
          <p>Marca: {todo.brand}</p>
          <p>Cantidad: {todo.quantity}</p>
          <p>Precio: ${todo.price}</p>
        </div>
        <button
          className={styles.btn_delete}
          onClick={() => deleteTodo(index)}
        >
          Eliminar
        </button>
      </div>
    </>
  );
};

export default Todo;
