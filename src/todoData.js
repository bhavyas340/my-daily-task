import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    text: "My task 1 - Do Execise Daily 1hr.",
    completed: true
  },
  {
    id: 2,
    text: "My task 2 - Code",
    completed: true
  },
  {
    id: 3,
    text: "My task 3 - Practice",
    completed: true
  },
  {
    id: 4,
    text: "My task 4 - Daily Learn new things",
    completed: true
  },
  {
    id: 5,
    text: "My task 5 - Recall tham",
    completed: true
  },
  {
    id: 6,
    text: "My task 6 - Work on your Weekness",
    completed: true
  }
];

// return todos.map((item) => <TodoItem item={item} key={item.id} />);

export default todos;
