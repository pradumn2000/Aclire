import React from "react";

export default function Header() {
  return (
    <nav>
      <div className="nav-toggle">
        <div className="bx bx-menu">
          <img src="images/sidebar-collapse.svg" alt="" />
        </div>
      </div>
      
      <div className="head-src">
        <h3>ADMIN DASHBOARD — Full Visibility · All Clients · Trends · Export</h3>
      </div>
      
      <button type="button" className="primary-cta">Admin Role</button>
    </nav>
  );
}