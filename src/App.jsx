import React from "react";
import PixelBlast from "./components/PixelBlast/PixelBlast";
import "./components/PixelBlast/PixelBlast.css"; 
import "../styles.css";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <PixelBlast className="pixel-bg" />
      <div className="container section">
        <h1>Hello World!</h1>
      </div>
    </div>
  );
}
