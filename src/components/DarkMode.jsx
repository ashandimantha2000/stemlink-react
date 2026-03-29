import { useState } from "react";

function DarkMode() {
  const [dark, setDark] = useState();

  const toggleMode = () => {
    setDark(!dark);
  };

  const styles = {
    backgroundColor: dark ? "#000" : "#fff",
    height: "100vh",
  };

  return (
    <div style={styles}>
      <h1>Hello</h1>
      <button onClick={toggleMode}>Switch to {dark ? "Light" : "Dark"}</button>
    </div>
  );
}

export default DarkMode;
