import { useEffect } from "react";

//componentDidMount
function Sync() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello</h1>;
}

export default Sync;
