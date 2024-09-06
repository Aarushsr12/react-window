import React from "react";
import ApiTable from "./Components/NetworkRequests";
import './App.css';

const App: React.FC = () => {
  return(
    <div className="App">
      <h1>React-window</h1>
      <ApiTable />
    </div>
  );
};

export default App;