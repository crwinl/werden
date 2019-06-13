import React from 'react';
import { Component } from 'react';
import './index.less';
import { Layout, Row, Col } from 'antd';

import BlogHeader from '../header';
import LeftSider from '../leftSider';

class WebLayout extends Component {
    render() {
        const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 };
        const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 };

        return (
            <Layout className="app-container">
                <BlogHeader />
                <Row className="main-wrapper">
                    <Col {...siderLayout}>
                        <LeftSider />
                    </Col>
                    <Col {...contentLayout}>
                        <div className="content-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Layout >
        )
    }
}

export default WebLayout