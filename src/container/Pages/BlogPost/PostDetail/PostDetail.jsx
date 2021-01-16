import axios from "axios";
import { Component } from "react";
import './PostDetail.css';

class PostDetail extends Component {

    state = {
        title: '',
        body: ''
    }

    redirectGoBack = () => {
        this.props.history.goBack();
    }

    componentDidMount() {
        axios.get(`http://localhost:3004/posts/${ this.props.match.params.postId }`)
        .then(res => {
            this.setState({
                title: res.data.title,
                body: res.data.body
            })
        })
        .catch(err => console.log('error : ', err));
    }

    render() {
        let {title} = this.state;
        let {body} = this.state;
        return (
            <div className="detail-wrapper">
                <h1 id="detail-title">{ title }</h1>
                <p id="detail-body">{ body }</p>
                <button onClick={this.redirectGoBack}>Go Back..</button>
            </div>
        )
    }
}

export default PostDetail;