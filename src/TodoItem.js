import React, { useState } from 'react';

function TodoItem({ todo, onRemove, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(todo.id, editText);
        }
        setIsEditing(!isEditing);
    };

    return (
        <>
            <li>
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                ) : (
                    <span>{todo.text}</span>
                )}

            </li>
            <button id='edit' onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button id='remove' onClick={() => onRemove(todo.id)}>Remove</button>
        </>
    );

}

export default TodoItem;