import React from 'react'
import * as ReactBootstrap from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

export default function Header(props) {
    return (
        <div>
            <header className="header">
                <ReactBootstrap.Navbar bg="primary" variant="dark">
                    <ReactBootstrap.Navbar.Brand href="/">HOME</ReactBootstrap.Navbar.Brand>
                    <ReactBootstrap.Nav className="mr-auto headerMenu">
                        {/* <Link to="/politics"><ReactBootstrap.Nav.Link href="/politics">Global</ReactBootstrap.Nav.Link></Link>
                        <Link to="/business"><ReactBootstrap.Nav.Link href="/business">Business</ReactBootstrap.Nav.Link></Link>
                        <Link to="/sports"><ReactBootstrap.Nav.Link href="/sports">Sports</ReactBootstrap.Nav.Link></Link>
                        <Link to="/entertainment"><ReactBootstrap.Nav.Link href="/entertainment">Entertainment</ReactBootstrap.Nav.Link></Link>
                        <Link to="/tech"><ReactBootstrap.Nav.Link href="/tech">Tech</ReactBootstrap.Nav.Link></Link> */}
                        <ReactBootstrap.Nav.Link href="/politics">HOME</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="/business">ABOUT US</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="/sports">CONTACT US</ReactBootstrap.Nav.Link>
                        {/* <ReactBootstrap.Nav.Link href="/entertainment">Entertainment</ReactBootstrap.Nav.Link> */}
                        {/* <ReactBootstrap.Nav.Link href="/tech">Tech</ReactBootstrap.Nav.Link> */}
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar>
                {/* <div>
                    SOCIAL MEDIA LINKS
                </div> */}
            </header>
        </div>
    )
}
