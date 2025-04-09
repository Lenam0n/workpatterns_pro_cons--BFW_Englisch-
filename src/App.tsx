import React from "react";
import "./App.css";
import InfoCarousel from "@components/info/InfoCarousel";

const App: React.FC = () => {
  return (
    <div className="appLayout">
      <div className="contentWrapper">
        <main className="mainContent">
          <InfoCarousel />
        </main>
      </div>
    </div>
  );
};

export default App;
