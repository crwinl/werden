import React from 'react';
import './index.less';
import {
    Layout,
    Row,
    Col
} from 'antd';

const navList = [
    {
        icon: 'home',
        title: '首页',
        link: '/'
    },
    {
        icon: 'edit',
        title: '归档',
        link: '/archives'
    },
    {
        icon: 'folder',
        title: '分类',
        link: '/categories'
    },
    {
        icon: 'user',
        title: '关于',
        link: '/about'
    }
]

const BlogHeader = () => {
    const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 }
    const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 }

    return (
        <Layout.Header className="header-contaienr">
            <Row>
                <Col {...responsiveLeft}>
                </Col>
                <Col {...responsiveRight}>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default BlogHeader;