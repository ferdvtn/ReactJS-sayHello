// ---- libraries ----
import { Component, Fragment } from "react";
import { BrowserRouter as Routes, Switch, Route, Link } from "react-router-dom";

// ---- pages ----
import YouTube from '../Pages/Youtube/Youtube';
import Product from '../Pages/Product/Product';
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import PostDetail from "../Pages/BlogPost/PostDetail/PostDetail";

// ---- style ----
import './Home.css';

class Home extends Component {

    render() {
        return (
            <Routes>
                <Fragment>
                    <nav>
                        <Link to='/'>Blog Post</Link>
                        <Link to='/lifecycle'>Life Cycle</Link>
                        <Link to='/product'>Product</Link>
                        <Link to='/youtube'>Youtube</Link>
                    </nav>

                    <Switch>
                        <Route path='/' exact component={BlogPost} />
                        <Route path='/detail-post/:postId' component={PostDetail} />
                        <Route path='/lifecycle' component={LifeCycleComp} />
                        <Route path='/product' component={Product} />
                        <Route path='/youtube' component={YouTube} />
                    </Switch>
                </Fragment>
            </Routes>
        )
    }
}

export default Home;