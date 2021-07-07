import React from 'react'
import './style.css'
import SideBar from '../SideBar'
import { Fragment } from 'react'

const Layout=props => {
    return(
        <div className="container">
            {props.children}
            <SideBar />
        </div>
    )
}

export default Layout