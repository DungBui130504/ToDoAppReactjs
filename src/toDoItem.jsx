import { useState, useEffect, useRef } from 'react'

function ToDoItem({ todo, onDelete, onToggle }) {

    return (
        <li style={{ paddingBottom: "5px" }}>
            {todo.text}
            <input type="checkbox" name="" id="" onChange={() => { onToggle(todo.id) }} />
            <button style={{ backgroundColor: "red", color: "white", padding: "3px", fontWeight: "normal" }}
                onClick={() => { onDelete(todo.id) }}
            >Delete</button>
        </li>
    );
}

export default ToDoItem;