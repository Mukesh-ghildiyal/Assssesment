import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div className="flex justify-between items-center p-2 bg-gray-100 rounded mb-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="mr-2"
                />
                <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
