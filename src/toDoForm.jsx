import { useState, useEffect, useRef } from 'react'

function ToDoForm({ addToDo }) {
    //Khoi tao gia tri text
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        //Huy hieu ung load trang cua the form
        e.preventDefault();
        if (!text.trim()) return; //Kiem tra gia tri text rong 
        addToDo(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <br /> <br />
                <button type='submit' onClick={() => {
                    console.log(text);
                }} style={{ backgroundColor: "black", color: "white" }}>Add to do</button>
            </form>
        </div>
    );
}

export default ToDoForm;