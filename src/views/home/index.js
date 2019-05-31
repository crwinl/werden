
import React from 'react';

class Home extends React.Component {

    state = {
        post_list: [],
        total: 0,
        loading:false
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
    }

    // 获取文章列表数据
    fetchPostList(){
        var  post_list= [];
        this.setState({
            post_list:post_list
        });

        this.setState({loading:true})


    }
}

export default Home