import { Component, Fragment } from "react";
import axios from 'axios';
import Post from '../../../component/Post/Post';
import './BlogPost.css';

class BlogPost extends Component {

    state = {
        data: [
            {
                userId: 2,
                id: 20,
                title: " TMP gaess",
                body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
            }
        ],
        blogPostData: {
            userId: 1,
            id: '',
            title: '',
            body: ''
        },
        isUpdate: false
    }

    reloadData() {
        // ---- menggunakan lib axios ----
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(response => {
            // console.log('reloadData');
            this.setState({
                data: response.data,
                isUpdate: false,
                blogPostData: {
                    userId: 1,
                    id: '',
                    title: '',
                    body: ''
                }
            });
        });
    }

    postDataToAPI = (data) => {
        axios.post('http://localhost:3004/posts', data)
        .then(() => {
            this.reloadData();
        })
        .catch(error => console.log(error)); 
    }
    
    putDataToAPI = (data) => {
        axios.put(`http://localhost:3004/posts/${data.id}`, data)
        .then((res) => {
            this.reloadData();
        })
        .catch(error => console.log(error)); 
    }

    handleRemove = (id) => {
        axios.delete(`http://localhost:3004/posts/${id}`)
        .then(() => {
            // console.log('handleRemove');
            this.reloadData();
            alert(`Data id: ${id} berhasil dihapus`);
        });
    }
    handleEdit = (data) => {
        this.setState({
            isUpdate: true,
            blogPostData: data,
        })
    }

    handleOnChange = (event) => {
        let tmp_blogPostData = {...this.state.blogPostData}
        if ( ! this.state.isUpdate) {
            tmp_blogPostData.id = new Date().getTime();
        }
        tmp_blogPostData[event.target.name] = event.target.value;
        this.setState({
            blogPostData: tmp_blogPostData
        });
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI(this.state.blogPostData);
        } else {
            this.postDataToAPI(this.state.blogPostData);
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    }

    shouldComponentUpdate () {
        // console.log('shouldComponentUpdate', true);
        // console.log(this.state.blogPostData)
        return true;
    }

    componentDidMount() {
        // console.log('componentDidMount');
        // setTimeout(() => {
            this.reloadData();
        // }, 3000);

    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    render() {
        // console.log('render');
        // console.log(this.state.blogPostData)

        const {blogPostData: postdata} = this.state;
        return (
            <Fragment>

                <div id='form'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={postdata.title} placeholder='Title ...' onChange={this.handleOnChange}/>
                    <br/>
                    <label htmlFor="body">Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="Content Post ..." value={postdata.body} onChange={this.handleOnChange}></textarea>
                    <br/>
                    <button className="btn-submit" onClick={this.handleSubmit}>{ this.state.isUpdate ? 'Update !' : 'Post Now !' }</button>
                </div>

                <div className="post-wrapper">
                    {
                        this.state.data.map(data => {
                            return (
                                <Post 
                                key={data.id}
                                data={data}
                                remove={this.handleRemove} 
                                edit={this.handleEdit} 
                                goDetail={this.handleDetail}
                                 />
                            )
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogPost;

