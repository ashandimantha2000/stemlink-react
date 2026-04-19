import "./index.css";
import Layout from "./components/UseContextAPI/Layout";
import { UserProvider } from "./context/UserContext";
import CartLayout from "./components/CartApp/CartLayout";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      {/* <UserProvider>
        <Layout />
      </UserProvider> */}

      <CartProvider>
        <CartLayout />
      </CartProvider>
    </div>
  );
}

export default App;
