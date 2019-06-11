import React from 'react';
import { Component } from 'react';
import './index.less';
import { Layout, Row, Col } from 'antd';

import BlogHeader from '../header';

class WebLayout extends Component {
    render() {
        const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

        return (
            <Layout className="app-container">
                <BlogHeader />
                <Row className="main-wrapper">
                    <Col {...contentLayout}>
                        <div className="content-wrapper">
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default WebLayout