import React, { useState } from "react";
import InputByUser from "./InputByUser";
import TaskNameUI from "./TaskNameUI";

function ToDoBox() {
  const [listItems, setListItems] = useState([]);

  function handleClick(inputText) {
    if (inputText !== "") {
      setListItems((prevItems) => [...prevItems, inputText]);
    }
  }

  function deleteItem(id) {
    setListItems(listItems.filter((e, index) => index !== id));
  }

  return (
    <div>
      <InputByUser handleClick={handleClick} />
      <section className="todo_box" id="todo_box">
        <div className="todo_list_container">
          {/* title */}
          <div className="todo_title_name">Todo-list</div>
          {/* input Task  */}

          {/* input task ends here */}
          <div className="todo_list_task">
            {/* map method to display all list items of array */}
            {listItems.map((OneListItem, index) => {
              return (
                <TaskNameUI
                  id={index}
                  key={index}
                  singleTask={OneListItem}
                  deleteItem={deleteItem}
                />
              );
            })}
          </div>
          {/* task name */}
        </div>
      </section>
    </div>
  );
}

export default ToDoBox;
