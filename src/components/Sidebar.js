import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({toggleSidebar}) => {

  return (
    <div className="d-flex flex-column vh-100 p-3" style={{ width: '100%', background: "#2E75B6" }}>
  <ul className="nav nav-pills flex-column align-items-stretch w-100">
    <li className="nav-item">
      <Link to="/" className="btn btn-primary mb-3 d-flex justify-content-center align-items-center w-100" style={{ background: "#ECF3F4", color: "#203864", height: '50px' }} onClick={toggleSidebar}>
        ВВЕДЕНИЕ
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/theory" className="btn btn-primary mb-3 d-flex justify-content-center align-items-center w-100" style={{ background: "#ECF3F4", color: "#203864", height: '50px' }} onClick={toggleSidebar}>
        ТЕОРИЯ
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/practice" className="btn btn-primary mb-3 d-flex justify-content-center align-items-center w-100" style={{ background: "#ECF3F4", color: "#203864", height: '50px' }} onClick={toggleSidebar}>
        ПРАКТИКА
      </Link>
    </li>
  </ul>
</div>

  );
};

export default Sidebar;
