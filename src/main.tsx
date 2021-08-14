import { app } from "hyperapp";
import h from "hyperapp-jsx-pragma";

// @jsx h

app({
  init: { name: "Fuji Souta" },
  view: (state) => (
    <main>
      <h1>Hello Hyperapp</h1>
      <p>{state.name}</p>
    </main>
  ),
  node: document.getElementById("app")!,
});
