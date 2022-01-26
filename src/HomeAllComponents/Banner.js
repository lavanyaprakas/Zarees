import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import banner from '../Images/Banner.jpeg';
import '../App.css';
import axios from 'axios';
import { Anchor, Avatar, Popover } from 'antd';
import { icon } from 'antd/lib/image/PreviewGroup';
import Text from 'antd/lib/typography/Text';

function Banner(props) {

    const [items, setItems] = useState([]);
    const [navbar, setNavBar] = useState({});
    const [result, setResult] = useState("");
    const [category, setCategory] = useState("");

    let collect = async () => {
        let adddata = await axios("https://rcz-backend-arvinth.herokuapp.com/api/shopData")
        setItems(adddata.data);
        let removetheDuplicates = adddata.data.reduce((acc, item) => {
            if (acc[item.classification]) {
                acc[item.classification] = [...acc[item.classification], item]
            }
            else {
                acc[item.classification] = [item]
            }
            return acc
        }, {})

        setNavBar(removetheDuplicates)
    }

    useEffect(() => {
        collect()
    }, []);

    const content = (data) => {
        return (
            <div style={{ display: "flex", flexDirection: "row", minWidth: "100%" }}>
                {data.map(e => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <h6>{e.category}</h6>
                        {e.availableItems.map(item => (
                        <div>
                            <ul style={{listStyleType:"none"}}>
                                <li>{item}</li>
                            </ul>
                        </div>
                        ))}
                    </div>
                ))}

            </div>
        )
    }

    let image = {
        "Men": "https://images.unsplash.com/photo-1543322748-33df6d3db806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        "Women": "https://www.collegefashion.net/wp-content/uploads/2021/01/clothes-in-closet.png",
        "Kids": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-iNHdup5MbVqaKkiawC5bM6CQgz9l13WscAsW1tUnZOF64xnx76D3QnCVdfbJx42e3-0&usqp=CAU",
        "Home Living": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0aGPg6VKmdaSqrOWFBfXzU6Ths6na51TiA&usqp=CAU"
    }
    return (
        <div >
            <div className="Menu">
                <Row style={{ fontFamily: "Times-New-Roman", fontSize: "Large", marginLeft:50 }}>

                    {Object.keys(navbar).map(e => (
                        <Popover content={content(navbar[e])} title={e} placement='bottom'>
                            <Col lg={2}><Avatar size={40} src={image[e]} />
                                <Text>{e}</Text>
                            </Col>
                        </Popover>
                    ))}
                    {/* <Col style={{marginLeft:20}}>
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

                </Col> */}
                </Row>
                {/* ------------------- Banner Image ----------------------------------- */}
                <Row>
                    <Col lg={12}>
                        <img src={banner} style={{ marginLeft: 65, marginTop: 50 }} />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Banner;