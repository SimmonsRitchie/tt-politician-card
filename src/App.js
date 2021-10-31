import React, { useEffect, useState } from "react";
import Profile from "./profile";

function App() {
  const [politicianData, setPoliticianData] = useState();
  useEffect(() => {
    fetch("https://www.texastribune.org/api/v2/politicians/3513/")
      .then((response) => response.json())
      .then((data) => {
        setPoliticianData(data);
      });
  }, []);

  if (!politicianData) {
    return null;
  }
  return (
    <div className="w-full h-full px-4 py-6 flex justify-center items-center">
      <Profile data={politicianData} />
    </div>
  );
}

export default App;
