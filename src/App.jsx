import "./index.css";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import InputFocus from "./components/InputFocus";
import Counter from "./components/Counter";
import CustomerHook from "./components/CustomerHook";
import CustomerHookEx2 from "./components/CustomerHookEx2";

function App() {
  return (
    <div>
      {/* <CustomerHook /> */}
      <CustomerHookEx2 />
      {/* <UseState />
      <hr />
      <UseRef />
      <hr />
      <InputFocus />
      <Counter /> */}
    </div>
  );
}

export default App;
