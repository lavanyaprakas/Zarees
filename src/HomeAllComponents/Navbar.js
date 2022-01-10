import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../Images/Zareeslogo.jpeg';
import '../App.css';
import { Input, Space } from 'antd';
import { AudioOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';



function Navbar(props) {
    const { Search } = Input;
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    const onSearch = value => console.log(value);
    return (

        <div className="navBar">
            <Row >
                <Col lg={2}>
                    <img src={logo} style={{ width: 150 }} />
                </Col>

                <Col lg={6} style={{marginTop:20}}>
                    <Space direction="vertical">
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{ width: 500 }} />
                    </Space>
                </Col>

                <Col lg={1} style={{marginTop:20}}>
                    <ShoppingCartOutlined />Cart
                </Col>

                <Col lg={1} style={{marginTop:20}}>
                    <Button type="primary" size={'large'}>
                        Login
                    </Button>
                </Col>

            </Row>

        </div>

    );
}
export default Navbar;
