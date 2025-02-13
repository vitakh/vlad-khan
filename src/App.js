import React from "react";
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
  return (
    <Router>
      <div className="d-flex " style={{ background: "#ECF3F4", overflowX: "hidden", overflowY: "scroll" }}>
      <div className="flex-grow-1 d-flex flex-column align-items-center" style={{ background: "#2E75B6", width: "275px" }}>
        <img src="/images/oval.png" className="img-fluid" alt="About"></img>
        <Sidebar />
      </div>
        <div className="flex-grow-1 d-flex flex-column">
          {/* style={{fontFamily: "Times New Roman, Times, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "#203864", fontWeight: "bold", maxWidth: "70%", margin: "0 auto", wordWrap: "break-word", wordBreak: "break-word"}} */}
          <header className="text-center pt-3" style={{ background: "white" }}>
            <h1 style={{fontFamily: "Times New Roman, Times, serif", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "#203864", fontWeight: "bold", maxWidth: "70%", margin: "0 auto", wordWrap: "break-word", wordBreak: "break-word"}}>
              Применение средних величин числовых наборов в статистическом
              анализе
            </h1>
            <hr style={{borderWidth: "3px", opacity: "1", margin: "3px"}}></hr>
            <hr style={{borderWidth: "3px", opacity: "1", margin: "3px"}}></hr>
          </header>
          <div className="p-4">
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
    </Router>
  );
};

export default App;
