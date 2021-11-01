import Navbar from "./Navbar";
import Left from "./Left";
import Right from "./Right";

import {Container,Row,Col} from "react-bootstrap";

function Main(){
    return (
        <div>
            <Navbar/>
            <Container>
                <Row>
                    <Col className="left" md={7}> <Left/> </Col>
                    <Col className="Right" md={5}> <Right/> </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main;