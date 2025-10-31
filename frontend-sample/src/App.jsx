import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend CI Demo 🚀</h1>
      <p>This is a sample React app to test GitHub Actions CI + SonarCloud</p>
      <button onClick={() => alert("Pipeline Working!")}>Test CI</button>
    </div>
  );
}

export default App;
