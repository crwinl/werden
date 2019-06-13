import React from 'react';
import './index.less';
import avatar from '../../asserts/avatar.png';
import { Link } from 'react-router-dom';
import { Divider, Tag, Icon } from 'antd';

class LeftSider extends React.Component {
    state = {
        tagList: []
    }

    componentDidMount() {
        let tagList = [
            { "name": "标签1" },
            { "name": "标签2" },
            { "name": "标签3" },
            { "name": "标签4" },
            { "name": "标签5" },
            { "name": "标签6" },
            { "name": "标签7" },
            { "name": "标签8" },
            { "name": "标签9" },
            { "name": "标签10" },
        ];
        this.setState({
            tagList: tagList
        })
    }

    render() {
        const tagList = this.state.tagList;

        return (
            <div className="sider-wrapper">
                <img src={avatar} className="sider-avatar" alt="" />
                <h2 className="name">Vitah</h2>
                <ul className="link-list">
                    <li>
                        <Icon type="github" />
                        <a target="_blank" rel="noreferrer noopener" href="https://github.com/vitahlin">
                            Github
                        </a>
                    </li>
                    <li>
                        <Icon type="mail" />
                        <a href="mailto:linw1225@gmail.com">
                            Mail
                        </a>
                    </li>
                </ul>

                {
                    /* 暂时注释热门文章列表
                    <Divider orientation="left">{title}</Divider>
                    <ul className="show-list">
                        {showList.map(d => (
                            <li key={d.id}>
                                <Link to={`/article/${d.id}`}>{d.title}</Link>
                            </li>
                        ))}
                    </ul>
                    */
                }

                <Divider orientation="left">标签</Divider>
                <div className="tags-content">
                    {tagList.map((tag, i) => (
                        <Tag key={i} >
                            <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
                        </Tag>
                    ))}
                </div>
            </div >
        )
    }
}

export default LeftSider