
import React from 'react';
import { Component } from 'react';

class PostDetail extends Component {

    state = {
        title: '',
        content: ''
    }

    // 方法会在组件已经呗渲染到DOM后运行
    componentDidMount() {
        this.fetchPost();
    }

    componentWillUnmount() {
    }

    fetchPost() {
        this.setState({
            title: "test title",
            content: "test content"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.content}</h1>
            </div>
        );
    }
}

export default PostDetail