import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
                    <nav className="mx-auto d-flex gap-4 justify-content-center">
                        <Link to='/'>Accueil</Link>
                        <Link to='/services'>Servives</Link>
                        <Link to='/profil/'>Profil</Link>

                    </nav>
    )
}
