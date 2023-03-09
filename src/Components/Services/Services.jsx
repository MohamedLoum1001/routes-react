import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Nos Services</h1>
     
            <nav className="mx-auto d-flex gap-4 justify-content-center">
              <Link to="/services/developpement">Services de Développement</Link>
              <Link to="/services/marketing">Services de Marketing</Link>

            </nav>

      <Outlet />

    </div>
  )
}
