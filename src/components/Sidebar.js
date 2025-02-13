import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 p-3" style={{ width: '275px' }}>
     
      <ul className="nav nav-pills flex-column align-items-center">
        <li className="nav-item">
          <Link to="/" className="btn btn-primary mb-3 mt-3 d-flex justify-content-center align-items-center btn-center" style={{ width: '225px', height: '50px', background: "#ECF3F4", color: "#203864"}}>
          ВВЕДЕНИЕ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/theory" className="btn btn-primary mb-3 d-flex justify-content-center align-items-center" style={{ width: '225px', height: '50px', background: "#ECF3F4", color: "#203864" }}>
            ТЕОРИЯ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/practice" className="btn btn-primary mb-3 d-flex justify-content-center align-items-center" style={{ width: '225px', height: '50px', background: "#ECF3F4", color: "#203864" }}>
            ПРАКТИКА
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
