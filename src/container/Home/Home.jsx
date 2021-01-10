import React, { Component } from "react";
import './Home.css';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     }, () => {
        //         console.log('Komponen telah di unmount');
        //     })
        // }, 7000);
    }

    render() {
        return (
            <div>
                {/* <YouTubeComp title='Pendahuluan' duration='3.24' />
                <YouTubeComp title='Materi 1' duration='6.43' />
                <YouTubeComp title='Materi 2' duration='2.33' />
                <YouTubeComp /> */}
                {/* <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent ?
                    <LifeCycleComp /> : null

                } */}
                <h1>Blog Post</h1>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;