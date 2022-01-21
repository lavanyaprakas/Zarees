import { FilterOutlined, MenuOutlined, ThunderboltOutlined } from '@ant-design/icons'; 
import React from 'react';
import { Col, Row } from 'reactstrap';
import footware from '../Images/footware.jpg';
import winter from '../Images/winter.jpeg';
import mensfashion from '../Images/mensfashion.jpg';
import womensfashion from '../Images/womensfashion.png';

function Classification(props) {
    return (
        <div>
            <div className="Menu" >
                <Row style={{ fontFamily: "Times-New-Roman", fontSize: "Large", marginLeft: 70 }}>
                    <Col lg={8} style={{ marginTop: 50 }} >
                        <ThunderboltOutlined />NEW
                    </Col>
                    <Col lg={2} style={{ marginTop: 50 }} >
                        <MenuOutlined /> Sort
                    </Col>
                    <Col lg={2} style={{ marginTop: 50 }}>
                        <FilterOutlined />Filter
                    </Col>
                </Row>

                {/* <Layout>
                    <Row style={{ marginLeft: 100, marginTop: 50 }} >
                        <img src={footware} style={{ width: 575, height: 250, marginLeft: 15, borderRadius: 25 }} />
                        <Row>
                            <img src={winter} style={{
                                width: 575, height: 250, marginLeft: 15,
                                marginTop: 20, borderRadius: 25
                            }} />
                        </Row>
                    
                        <Col>
                            <img src={mensfashion} />
                        </Col>
                        <Col>

                        </Col>
                   
                    </Row>
                </Layout> */}
                <Row>
                    <Row style={{ marginLeft: 75, marginTop: 50 }} >
                        <img src={footware} style={{ width: 575, height: 250, marginLeft: 15, borderRadius: 25 }} />
                        <Row>
                            <img src={winter} style={{
                                width: 575, height: 250, marginLeft: 15,
                                marginTop: 20, borderRadius: 25
                            }} />
                            <Col>
                                <img src={mensfashion} style={{marginTop:-251,borderRadius:20,width:285}} />
                            </Col>
                            <Col>
                                <img src={womensfashion} style={{marginTop:-251,borderRadius:20,width:316,marginLeft:-80, height:521}}/>
                            </Col>
                        </Row>
                    </Row>
                </Row>
            <Row style={{marginTop:25}}>

            </Row>
            </div>
        </div>
    );
}

export default Classification;