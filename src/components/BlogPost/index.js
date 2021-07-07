import React,{useState,useEffect} from 'react'
import './style.css'
import Card from "../../components/UI/Card"
// import FITNESSBLOGPOST from "../../images/fitness-blog-post.jpg"
import blogPost from "../../data/blog.json"

const BlogPost=props => {
    
    const [post,setPost]=useState({
        
            id:"",
            blogCategory:"",
            blogTitle:"",
            slug:"",
            postedOn:"",
            author:"",
            blogImage:"",
            blogText:""
        
    })
    const [postId,setPostId]=useState('')

   
    useEffect(() => {
        // console.log(blogPost)
        const postId=props.match.params.postId
        const post=blogPost.data.find(post => post.id==postId)
        setPost(post)
        setPostId(postId)
    },[post,props.match.params.postId])

    if(post.blogImage=="") return null

    return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postBy">Posted on {post.postedOn},2021 by {post.author}  </span>
                </div>

                <div className="postImageContainer">
                    <img src={require(`../../images/`+ post.blogImage).default } alt={"post img"}  />
                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>

            </Card>
        </div>
        
    )
}

export default BlogPost