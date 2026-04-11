import ControlledForm from "./components/ControlledForms/ControlledForm";
import LoginForm from "./components/ControlledForms/LoginForm";
import HTMLForms from "./components/HTMLForms";
import RHFForm from "./components/RHFForms/RHFForm";
import WithValidations from "./components/RHFForms/WithValidations";
import UncontrolledForm from "./components/UncontrolledForms/UncontrolledForm";
import ZodoForm from "./components/Zodo/ZodoForm";
import "./index.css";
import Test from "./Test";


function App() {
  return (
    <div>
      {/* <HTMLForms /> */}
      {/* <ControlledForm /> */}
      {/* <LoginForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <RHFForm /> */}
      {/* <Test /> */}
      {/* <WithValidations /> */}
      <ZodoForm />
    </div>
  );
}

export default App;
