import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import DisplayIPAddress from "./components/DisplayIPAddress";
import Exhibit from "./components/Exhibit";

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit heading="IPv4">
        {/* <Card /> */}
        <DisplayIPAddress ipType="IPv4" />
      </Exhibit>
      <Exhibit heading="IPv6">
        {/* <Card /> */}
        <DisplayIPAddress ipType="IPv6" />
      </Exhibit>
    </div>
  );
}

export default App;
