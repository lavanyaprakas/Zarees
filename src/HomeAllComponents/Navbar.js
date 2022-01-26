import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../Images/Zareeslogo.jpeg';
import '../App.css';
import { Input, Space } from 'antd';
import { AudioOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import  axios  from 'axios';



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

        <div>
            <div className="navBarTop">

            <Row>
            </Row>
            <Row >
                <Col lg={3}>
                    <img src={logo} style={{ width: 150}} />
                </Col>

                <Col lg={6} style={{marginTop:20}}>
                    <Space direction="vertical">
                        <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{ width: 500 }} />
                    </Space>
                </Col>

                <Col lg={1} style={{marginTop:20,fontFamily:"sans-serif",fontSize:"large"}}>
                    <ShoppingCartOutlined />Cart
                </Col>

                <Col lg={1} style={{marginTop:20,fontFamily:"sans-serif",fontSize:"large"}}>
                    <Button type="primary" size={'large'}>
                        Login
                    </Button>
                </Col>

            </Row>
            <Row style ={{marginTop:50}}>
                
            </Row>
            </div>

            
        </div>

    );
}
export default Navbar;
