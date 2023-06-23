import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Tweets from "./Pages/Tweets";
import Navigation from "./components/Navigation";
import "./index.css";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
