import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="My Exhibit">
        <Card />
      </Exhibit>
    </div>
  );
}

export default App;
