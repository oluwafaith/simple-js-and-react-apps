import React from "react"

function TodoItem(props: { item: { completed: boolean | undefined; text: React.ReactNode; }; }) {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={props.item.completed} />
        <p>{props.item.text}</p>
      </div>
    );
}

export default TodoItem
