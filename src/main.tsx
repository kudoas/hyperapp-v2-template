import { app } from "hyperapp";
import h from "hyperapp-jsx-pragma";

type State = {
  todos: string[];
  value: string;
};

const state = { todos: [], value: "" };

const NewValue = (state: State, event: any) => {
  state.value = event.target.value;
  return {
    ...state,
    value: event.target.value,
  };
};

const AddTodo = (state: State) => ({
  ...state,
  value: "",
  todos: state.todos.concat(state.value),
});

app({
  init: state,
  view: ({ todos, value }) => (
    <main style={{ color: "green" }}>
      <h1>Hello Hyperapp</h1>
      <input type="text" onchange={NewValue} value={value} />
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
      <button onclick={AddTodo}>New!</button>
    </main>
  ),
  node: document.getElementById("app")!,
});
