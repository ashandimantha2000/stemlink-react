import './index.css'
import MapCard from "./components/MapCard";
import YTCard from "./components/YTCard";
import Button from './components/Button';

function App() {
  return (
    <div>
      <h1>Hello STEMLink</h1>
      <Button />
      {/* <YTCard header="Reviewing Best Tech Gadgets 2025" image="https://corporate.bestbuy.com/wp-content/uploads/2021/12/BBY_Blog_BBYxMKBHD.png" /> */}
      <div>
        <MapCard />
      </div>
    </div>
  );
}

export default App;
