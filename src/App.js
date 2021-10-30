import { useEffect, useState } from "react";

import "./App.css";
import Profile from "./profile";

function App() {
  const [politicianData, setPoliticianData] = useState();
  useEffect(() => {
    fetch("https://www.texastribune.org/api/v2/politicians/1254/")
      .then((response) => response.json())
      .then((data) => {
        setPoliticianData(data);
      });
  }, []);

  if (!politicianData) {
    return null;
  }
  console.log("data", politicianData);
  return (
    <div className="w-full h-full p-4 flex justify-center items-center">
      <Profile data={politicianData} />
    </div>
  );
}

export default App;
