import React from 'react'
import './style.css'
import Card from '../../../components/UI/Card'

const RecentPosts=props => {
    return(
        <div>
           <div style={props.style}>
                    <Card  style={{marginBottom:"20px"}}>
                        <div className="postImage">
                            <img src={'https://cdn.pixabay.com/photo/2017/09/25/13/12/dog-2785074__340.jpg'} alt="/" />
                        </div>
                        <div style={{textAlign:"center"}} >
                            <span>Featured</span>
                            <h2>DOG POSTS</h2>
                            <span>Posted on July2, 2020 by Aditya</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                            <button>Read More</button>
                        </div>
                    </Card>
                    
                </div> 
        </div>
    )
}

export default RecentPosts