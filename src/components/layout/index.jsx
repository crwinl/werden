import React from 'react';
import { Component } from 'react';
import './index.less';
import { Layout, Row, Col } from 'antd';

class WebLayout extends Component {
    render() {
        const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

        return (
            <Layout className="app-container">
                <Row className="main-wrapper">
                    <Col {...contentLayout}>
                        <div className="content-wrapper">
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default WebLayout