import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">GeoVoice Crew</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/leaflet-map">Leaflet Map</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/openlayers-map">OpenLayers Map</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/ola-map">Ola Maps</Link>
                        </li>

                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar