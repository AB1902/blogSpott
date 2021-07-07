import React from 'react'
import './style.css'
import SideBar from '../../components/SideBar'
import Card from '../../components/UI/Card'
import RecentPosts from './RecentPosts'
import data from "../../data/blog.json"
import Layout from '../../components/Layout'

const SideImage=props => {
    return(
        <div style={{height:`${props.height}px`}} >
                        <img src={props.src} alt="/"  />
        </div>
    )
}

const ImageGallery=props => {
    return(
        <div className="galleryPost" style={props.galleryStyle} >
                
                <section style={{width:"70%" }} >
                    <div className="mainImage">
                        <img src={require("../../images/"+ props.imageArray[1]).default} alt="/"  />
                    </div>
                </section>
                <section className="sideImgDim" style={{width:"50%" }}>
                    
                    <SideImage height={props.sideHeight} src={require("../../images/"+ props.imageArray[0]).default} alt="/" />
                    <SideImage height={props.sideHeight} src={require("../../images/"+ props.imageArray[2]).default} alt="/" />
                    <SideImage height={props.sideHeight} src={require("../../images/"+ props.imageArray[3]).default} alt="/" />
                    
                    {/* <div style={{height:`${sideHeight}px`}}>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ox_w6yD7orEOhno749ye1ie8FjKrQkjEsA&usqp=CAU"} alt="/"  />
                    </div>
                    <div style={{height:`${sideHeight}px`}}>
                        <img src={"https://www.sciencenewsforstudents.org/wp-content/uploads/2020/07/070720_bo_dogage_feat-1028x579.jpg"} alt="/"  />
                    </div> */}

                </section>
                </div>
    )
    
}

const Home=props => {
    
    const galleryHeight=540
    const galleryStyle={
        height:galleryHeight+'px',
        overflow:'hidden'
    }

     const sideHeight=galleryHeight/3

     const imgAr=data.data.map(post => post.blogImage)

    return(
        <div>
            <Card>
                <ImageGallery 
                        largeWidth="70%"
                        smallWidth="30%"
                        sideHeight={sideHeight}
                        galleryStyle={galleryStyle}
                        imageArray={
                            imgAr
                        }
                        // images={[]}
                />
            </Card>
            <section className="homeContainer">
                <Layout>
                    <RecentPosts style={{width:"90%"}} />
                </Layout>
                
            </section>
        </div>
    )
}

export default Home