import React, { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";

const LatencyDisplay = () => {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const client = new w3cwebsocket("ws://localhost:55455");
    client.onmessage = (message) => {
      const packetTime = Number(message.data);
      const now = Date.now();
      const packetLatency = now - packetTime;
      setLatency(packetLatency);
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      {latency !== null ? <p>{latency}ms</p> : <p>Loading...</p>}
    </div>
  );
};

export default LatencyDisplay;
