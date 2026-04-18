import "./index.css";
import ZodoForm from "./components/Zodo/ZodoForm";
import UserProfile from "./components/BasicStates/UserProfile";
import PDUserProfile from "./components/PropDrilling/PDUserProfile";
import Layout from "./components/UseContextAPI/Layout";
import { UserProvider } from "./context/UserContext";
import CartLayout from "./components/CartApp/CartLayout";
import { CartProvider } from "./context/CartContext";
import SignUpWithRHFAndZod from "./components/Zodo/SignUpWithRHFAndZod";

function App() {
  return (
    <div>
      {/* <ZodoForm /> */}
      <SignUpWithRHFAndZod />
      {/* <UserProfile /> */}
      {/* <PDUserProfile /> */}
      {/* <UserProvider>
        <Layout />
      </UserProvider> */}

      {/* <CartProvider>
        <CartLayout />
      </CartProvider> */}
    </div>
  );
}

export default App;
