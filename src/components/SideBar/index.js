import React,{useEffect,useState} from 'react'
import './style.css'
import Card from '../UI/Card'
import blogPost from "../../data/blog.json"
import { NavLink } from 'react-router-dom'

const SideBar=props => {
    const [posts,setPosts]=useState([])
    // const [postId,setPostId]=useState('')
   
    useEffect(() => {
        const posts=blogPost.data
        setPosts(posts)
        // setPostId(postId)
    },[posts])

    return(
        <div className="sidebarContainer" style= {{
            width:props.width
        }} >
            <Card style={{marginBottom:"20px" ,padding:"20px",boxsizing:"border-box"}}>
                <div className="cardHeader">
                    <span>About US</span>
                </div>
                <div className="profilePicContainer">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/163/324/original/blog-creator-at-computer-vector.jpg" alt="" />
                </div>
                <div className="cardBody">
                    <p className="bio"> This is a blog website frontend working on CRUD Concept for the portfolio item of Aditya Bajpai</p>
                </div>
            </Card>
            <Card style={{marginBottom:"20px" ,padding:"20px",boxsizing:"border-box"}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom:"20px" ,padding:"20px",boxsizing:"border-box"}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">

                    {
                        posts.map(post => {
                            return(
                                <NavLink key={post.id} to = {`/post/${post.id}` }  >
                                <div className="recentPost">
                                    <h3 >{post.blogTitle}</h3>
                                    <span>{post.postedOn}</span>
                                </div>
                                </NavLink>
                            )
                        })
                    }

                </div>
            </Card>
            
        </div>
    )
}

export default SideBar