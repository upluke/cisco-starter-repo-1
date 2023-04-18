import "./App.css";
import Banner from "./components/Banner";
import DisplayIPAddress from "./components/DisplayIPAddress";
import Exhibit from "./components/Exhibit";
import LatencyDisplay from "./components/LatencyDisplay";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="cols">
        <div>
          <Exhibit heading="IPv4">
            <DisplayIPAddress ipType="IPv4" />
          </Exhibit>
          <Exhibit heading="IPv6">
            <DisplayIPAddress ipType="IPv6" />
          </Exhibit>
        </div>
        <div>
          <LatencyDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;
