import React from 'react';

const Task = (props) => {

    const getBackgroundColor = () => {
        if (props.done) {
            return "lightgrey";
        }
        switch (props.priority) {
            case "High":
                return "lightcoral";
            case "Medium":
                return "khaki";
            case "Low":
                return "lightgreen";
            default:
                return "#5bb4c4";
        }
    };

    return (
        <div className="card" style={{ backgroundColor: getBackgroundColor() }}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority">{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>
                {props.done ? "Undo" : "Done"}
            </button>
            <button className='deleteButton' onClick={props.deleteTask}>
                Delete
            </button>
        </div>
    );
};

export default Task;