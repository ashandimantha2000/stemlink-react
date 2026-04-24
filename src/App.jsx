import "./index.css";
import Layout from "./components/UseContextAPI/Layout";
import { UserProvider } from "./context/UserContext";
import CartLayout from "./components/CartApp/CartLayout";
import { CartProvider } from "./context/CartContext";
import UserProfile from "./components/Zustand/UserProfile";
import UserProfile2 from "./components/Zustand/UserProfile2";
import Header from "./components/Theme/Header";
import Content from "./components/Theme/Content";
import ThemeToggle from "./components/Theme/ThemeToggle";

function App() {
  return (
    <div>
      {/* <UserProvider>
        <Layout />
      </UserProvider> */}

      {/* <CartProvider>
        <CartLayout />
      </CartProvider> */}

      {/* <UserProfile /> */}
      {/* <UserProfile2 /> */}

      <Header />
      <ThemeToggle />
      <br />
      <Content />
    </div>
  );
}

export default App;
