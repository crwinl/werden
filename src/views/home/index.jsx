
import React from 'react';
import {
    Component,
    Fragment
} from 'react';

import {
    Empty,
    Divider
} from 'antd';


class Home extends Component {

    state = {
        post_list: [],
        total: 0,
        loading: false
    }

    componentDidMount() {
        this.fetchPostList();
    }

    componentWillReceiveProps() {
    }

    // 获取文章列表数据
    fetchPostList() {
        var post_list = [{
            id: 1,
            'title': "aajaj",
            'content': "ajajajajajaj",
            'created_at': "19992-12-25"
        }];

        post_list = [];
        this.setState({
            post_list: post_list
        });

        this.setState({ loading: true })
    }

    render() {
        const post_list = this.state.post_list;

        // 列表为空的显示内容
        if (this.state.post_list.length === 0) {
            return (
                <div className="no-data">
                    <Empty description="没有数据啊 大哥～" />
                </div>
            );
        }

        return (
            <div className="content-inner-wrapper home">
                <Fragment>
                    <ul className="ul-list">
                        {
                            post_list.map(post => (
                                <li key={post.id} className="ul-list-item">
                                    <Divider>
                                        <span className="title">
                                            {post.title}
                                        </span>
                                        <span className="create-time">
                                            {post.created_at}
                                        </span>
                                    </Divider>

                                    <div className="post-detail">
                                        {post.content}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </Fragment>
            </div>
        );
    }
}

export default Home