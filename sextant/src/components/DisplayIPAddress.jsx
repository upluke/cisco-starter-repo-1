import { useEffect, useState } from "react";

function DisplayIPAddress({ ipType }) {
  const [ipAddress, setIdAddress] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const url =
        ipType === "IPv4"
          ? "https://api.ipify.org?format=json"
          : "https://api64.ipify.org?format=json";
      const data = await fetch(url);
      const json = await data.json();

      setIdAddress(json.ip);
    };
    fetchData().catch(console.error);
  }, []);

  return <div>{ipAddress}</div>;
}

export default DisplayIPAddress;
