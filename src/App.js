import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Theory from "./pages/Theory";
import Practice from "./pages/Practice";
import Theory1 from "./pages/Theory1";
import Theory2 from "./pages/Theory2";
import Theory3 from "./pages/Theory3";
import Theory4 from "./pages/Theory4";
import Theory5 from "./pages/Theory5";
import Theory6 from "./pages/Theory6";
import Theory7 from "./pages/Theory7";
import Theory8 from "./pages/Theory8";

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Track sidebar state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Toggle function

  return (
    <Router>
      <div className="container-fluid">
      <div className= "row">
        <div className={`col-12 col-md-2 d-flex flex-column align-items-center p-0 ${isSidebarOpen ? 'd-flex' : 'd-none'} d-md-flex`} style={{background: "#2E75B6"}}>
          <img src="/images/oval.png" className="img-fluid" alt="About"></img>
          <Sidebar />
        </div>
        <div className="col-12 col-xl-10 col-lg-10 col-md-10 col-sm-12 flex-grow-1" style={{ background: "#ECF3F4", overflowX: "hidden", overflowY: "auto", minHeight: "100vh"}}>
        <button
          onClick={toggleSidebar}
          className="btn btn-primary d-md-none"
          style={{ position: "absolute", top: "20px", left: "20px", zIndex: "10", background: "#ECF3F4", color: "#203864", borderColor: "#203864" }}>
          <i className="bi bi-list"></i>
        </button>
          <div className="row">
            <header className="text-center pt-3 p-0" style={{ background: "white" }}>
                <h1 style={{fontFamily: "Times New Roman, Times, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "#203864", fontWeight: "bold", maxWidth: "70%", margin: "0 auto", wordWrap: "break-word", wordBreak: "break-word"}}>
                  Применение средних величин числовых наборов в статистическом
                  анализе
                </h1>
                <hr style={{borderWidth: "3px", opacity: "1", margin: "3px"}}></hr>
                <hr style={{borderWidth: "3px", opacity: "1", margin: "3px"}}></hr>
              </header>
            </div>
          <div className="row">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/theory" element={<Theory />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/theory1" element={<Theory1 />} />
                <Route path="/theory2" element={<Theory2 />} />
                <Route path="/theory3" element={<Theory3 />} />
                <Route path="/theory4" element={<Theory4 />} />
                <Route path="/theory5" element={<Theory5 />} />
                <Route path="/theory6" element={<Theory6 />} />
                <Route path="/theory7" element={<Theory7 />} />
                <Route path="/theory8" element={<Theory8 />} /> 
              </Routes>
          </div>
        </div>
      </div>
      </div>

    </Router>
  );
};

export default App;
