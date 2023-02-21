import React, { useState } from "react";

function TaskNameUI(Props) {
  return (
    <div className="tasks task_design">
      <label className="container">
        <input
          type="checkbox"
          className="strikethrough"
          name="task1"
          id="task1"
        />
        <span className="strikethrough">{Props.singleTask}</span>
        <span className="checkmark"></span>
      </label>
      <p
        onClick={() => {
          Props.deleteItem(Props.id);
        }}
        className="delete__item"
      >
        <i class="uil uil-trash-alt"></i>
      </p>
    </div>
  );
}

export default TaskNameUI;
