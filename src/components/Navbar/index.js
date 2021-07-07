import React,{useState} from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
import SEARCHBUTTON from "../../assets/icons/search2.png"


const Navbar=props => {

    const [search,setSearch]=useState(false)

    const submitForm =(e) => {
        e.preventDefault()
        alert("searched")
    }

    
    const openSearch =() => {
        setSearch(true)
    }

    const searchClass=search?"searchInput active":"searchInput"        //ifelse for assigning classes

    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/post/1">Posts</NavLink></li>
                {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
            </ul> 
            <form onSubmit={submitForm}>
                <div className="search">
                    <input className={searchClass} placeholder="search"/>
                    <img onClick={openSearch} className="searchIcon" src={SEARCHBUTTON} alt="search"  />
                </div>
            </form>  
           
        </div>
    )
}

export default Navbar