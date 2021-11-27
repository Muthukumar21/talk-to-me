import "./App.css";
import Chat from "./Chat";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Router>
            <SideBar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />{" "}
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
