
import React from 'react';
import { Component, Fragment } from 'react';

import { Empty, Divider } from 'antd';


import { transMakrdown } from '../../lib/markdown';


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
            'title': "你好你好你好你好你好你好",
            'content': "他最后这番话，说的是有些讽刺的，女真人已经以如此速度杀至眼前，他迎上去，要说能胜，那是笑话。自己手下兵将五万，对方是十万人，自己统领武瑞营才一年，上面官最大的还是个文官，而光是一个郭药师，经营燕京数年，朝廷对他不仅没有节制，而且是以燕云六州全力向他输血。再加上女真人灭辽国时的战绩，对比曾经的武瑞营实力，这种仗，哪怕霸王项羽、战神吕布、白马陈庆之再世，恐怕都难有胜算。但他又能有多少选择呢。      这些事情，圈内人也都是多少能看到的。      “世事至此，做什么都不对，你不去，跟那帮家伙没什么两样，你去了，损兵折将，给人各个击破的机会，我的坚壁清野也一样，很可能因为这场迁移，被我饿死的人比被女真人杀死的人还多，但该做的还是要做。对二少你，你问我怎么才对，那我只说两点，能做到任何一点，你怎么样都行。”      宁毅也颇有醉意地挥了挥手：“第一！你能干掉它们一半人，第二！你能把女真大军拖在这边十天半个月。这两点有任意一点可以做到的，二少，麻烦你死在那里，如果做不到，你死了，我当你是懦夫！”      他叹了口气：“杭州有钱老，如今有周侗，我很敬重他们，但钱老做学问，是务虚之人，周侗是自己一个人。二少你是将军，忍辱负重，也得活着。就像我说的，重要的不是人命，不是零，而是你得制造正数，才能帮人把债还了。”      秦绍谦神色严肃起来，他望向远处的军营，再望向天空，没有说话。宁毅的这番话，恐怕跟他最初的打算是不一样的。      然后，到了第二天的凌晨，武瑞军拔营转向寿张县方向，预备阻击完颜宗望的西路军。      宁毅站在草坡上看着五万多人浩浩荡荡地过去了，不知道有多少人能回来。      而此时，摆在他的面前的，也有着足够严重的问题。那是关于正式展开的坚壁清野工作的。      女真南侵，有人惶然避开，有人逆流而上，但随后他们就发现，他们都要被那轰然而来的洪流波及、裹挟进去了……      就在宁毅与秦绍谦的这场谈话之后不久，最大的混乱就以谁都无法抵御的狂暴姿态，在中原腹地轰然爆发了开来。他最后这番话，说的是有些讽刺的，女真人已经以如此速度杀至眼前，他迎上去，要说能胜，那是笑话。自己手下兵将五万，对方是十万人，自己统领武瑞营才一年，上面官最大的还是个文官，而光是一个郭药师，经营燕京数年，朝廷对他不仅没有节制，而且是以燕云六州全力向他输血。再加上女真人灭辽国时的战绩，对比曾经的武瑞营实力，这种仗，哪怕霸王项羽、战神吕布、白马陈庆之再世，恐怕都难有胜算。但他又能有多少选择呢。      这些事情，圈内人也都是多少能看到的。      “世事至此，做什么都不对，你不去，跟那帮家伙没什么两样，你去了，损兵折将，给人各个击破的机会，我的坚壁清野也一样，很可能因为这场迁移，被我饿死的人比被女真人杀死的人还多，但该做的还是要做。对二少你，你问我怎么才对，那我只说两点，能做到任何一点，你怎么样都行。”      宁毅也颇有醉意地挥了挥手：“第一！你能干掉它们一半人，第二！你能把女真大军拖在这边十天半个月。这两点有任意一点可以做到的，二少，麻烦你死在那里，如果做不到，你死了，我当你是懦夫！”      他叹了口气：“杭州有钱老，如今有周侗，我很敬重他们，但钱老做学问，是务虚之人，周侗是自己一个人。二少你是将军，忍辱负重，也得活着。就像我说的，重要的不是人命，不是零，而是你得制造正数，才能帮人把债还了。”      秦绍谦神色严肃起来，他望向远处的军营，再望向天空，没有说话。宁毅的这番话，恐怕跟他最初的打算是不一样的。      然后，到了第二天的凌晨，武瑞军拔营转向寿张县方向，预备阻击完颜宗望的西路军。      宁毅站在草坡上看着五万多人浩浩荡荡地过去了，不知道有多少人能回来。      而此时，摆在他的面前的，也有着足够严重的问题。那是关于正式展开的坚壁清野工作的。      女真南侵，有人惶然避开，有人逆流而上，但随后他们就发现，他们都要被那轰然而来的洪流波及、裹挟进去了……      就在宁毅与秦绍谦的这场谈话之后不久，最大的混乱就以谁都无法抵御的狂暴姿态，在中原腹地轰然爆发了开来。",
            'created_at': "19992-12-25"
        },
        {
            id: 2,
            'title': "aajaj",
            'content': "# a \n - a \n - b",
            'created_at': "19992-12-25"
        }
        ];

        //post_list = [];
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
                <div className="content-inner-wrapper home">
                    <div className="no-content">
                        <Empty description="没有数据啊 大哥～" />
                    </div>
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

                                    <div className="article-detail description" dangerouslySetInnerHTML={{ __html: transMakrdown(post.content) }}>
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