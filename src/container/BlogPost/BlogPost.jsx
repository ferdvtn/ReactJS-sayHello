import { Component } from "react";
import axios from 'axios';
import './BlogPost.css';
import Post from '../../component/Post/Post';

class BlogPost extends Component {

    state = {
        data: [
            {
                "userId": 2,
                "id": 20,
                "title": " TMP gaess",
                "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
            }
        ]
    }

    reloadData() {
        // ---- menggunakan lib axios ----
        axios.get('http://localhost:3004/posts')
        .then(response => {
            console.log('reloadData');
            this.setState({data: response.data})
        })
    }

    handleRemove = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`)
        .then(() => {
            console.log('handleRemove');
            this.reloadData();
            alert(`Data id: ${id} berhasil dihapus`)
        });
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.reloadData();
        }, 5000);

    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {
        console.log('render');
        return (
            <div className="post-wrapper">
                {
                    this.state.data.map(data => {
                        return (
                            <Post 
                            key={data.id}
                            data={data}
                            remove={(id) => this.handleRemove(id)} />
                        )
                    })
                }
            </div>
        )
    }
}

export default BlogPost;

