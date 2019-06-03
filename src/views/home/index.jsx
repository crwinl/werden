
import React from 'react';
import {
    Component,
    Fragment
} from 'react';

import {
    Empty,
} from 'antd';

class Home extends Component {

    state = {
        post_list: [],
        total: 0,
        loading: false
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    // 获取文章列表数据
    fetchPostList() {
        var post_list = [];
        this.setState({
            post_list: post_list
        });

        this.setState({ loading: true })
    }

    render() {
        // 列表为空的显示内容
        if (this.state.post_list.length === 0) {
            return (
                <div className="no-data">
                    <Empty />
                </div>
            );
        }

        return (
            <div className="content-inner-wrapper home">
                <Fragment>
                </Fragment>
            </div>
        );
    }
}

export default Home