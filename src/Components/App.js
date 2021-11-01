import Aside from './Aside';
import Main from './Main';

import {Container,Row,Col} from "react-bootstrap";

function App() {
  return (
    <div>
        <Container className="noPadding">
          <Row className="noMargin">
            <Col className="noPadding"  md={2}> < Aside/> </Col>
            <Col className="noPadding" md={10}> <Main/> </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
