import React from 'react';
import { Col, Row } from 'reactstrap';
import cloth from '../Images/clothing.jpeg';
import shoe from '../Images/shoes.jpeg';
import activedress from '../Images/active_wears.jpeg';
import accessories from '../Images/accessories.jpeg';
import inspiration from '../Images/inspiration.jpeg';
import gifts from '../Images/gifts.jpeg';
import banner from '../Images/Banner.jpeg';
import '../App.css';

function Banner(props) {
    return (
        <div >
            <div className="Menu">
            <Row style={{fontFamily:"Times-New-Roman",fontSize:"Large"}}>
                <Col style={{marginLeft:20}}>
                <img src={cloth} style={{ width: 50, borderRadius:20 }}/> Clothing
                </Col>

                <Col>
                <img src={shoe} style={{ width: 50, borderRadius:20 }}/> Shoes
                </Col>

                <Col>
                <img src={activedress} style={{ width: 50, borderRadius:20 }}/> Active Wears
                </Col>
                <Col>
                <img src={accessories} style={{ width: 50, borderRadius:20 }}/> Accessories
                </Col>
                <Col>
                <img src={gifts} style={{ width: 50, borderRadius:20 }}/> Gift
                </Col>
                <Col>
                <img src={inspiration} style={{ width: 50, borderRadius:20 }}/> Inspriation

                </Col>
            </Row>
            
            <Row>
                <Col lg={12}>
                <img  src={banner} style={{marginLeft:65, marginTop:50}}/>
                </Col>
            </Row>
            </div>
        </div>
    );
}

export default Banner;