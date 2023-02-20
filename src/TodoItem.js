import React from "react";
import todos from "./todoData";
import todoData from "./todoData";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      text: "My Task",
      completed: true
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }
  render() {
    return (
      <>
        {todos.map((item) => (
          <div className="todo-item">
            <input
              type="checkbox"
              // checked={this.state.completed}
              onChange={this.handleChange}
            />
            <label> {item.text} </label>
            <hl />
          </div>
        ))}
      </>
    );
  }
}

export default TodoItem;
