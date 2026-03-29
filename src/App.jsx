import Greeting from "./components/Greeting";
import NewGreeting from "./components/NewGreeting";
import Notifications from "./components/Notifications";
import "./index.css";

function App() {
  return (
    <div>
      <Greeting />
      <NewGreeting />
      <Notifications />
    </div>
  );
}

export default App;
