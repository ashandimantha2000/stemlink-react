import './index.css'
import MapCard from "./components/MapCard";
import YTCard from "./components/YTCard";
import Button from './components/Button';
import APIFetch from './components/APIFetch';
import DarkMode from './components/DarkMode';
import ExpensiveExample from './components/ExpensiveExample';
import Interval from './components/Interval';
import Sync from './components/Sync';

function App() {
  return (
    <div>
      <h1>Hello STEMLink</h1>
      {/* <Button /> */}
      {/* <YTCard header="Reviewing Best Tech Gadgets 2025" image="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" /> */}
      <div>
        {/* <MapCard /> */}
        {/* <APIFetch /> */}
        {/* <DarkMode /> */}
        {/* <ExpensiveExample /> */}
        {/* <Interval /> */}
        <Sync />
      </div>
    </div>
  );
}

export default App;
