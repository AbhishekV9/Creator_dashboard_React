import {Card} from "react-bootstrap";

function Left(){
    return(
        <div className="main-left">
            <div className="f-col">
                <div className="addBlock">
                        <h5 className="centerText header">Add Block</h5>
                        <div className="f p">
                            <div className="left-icons">
                                <img src="https://cdn-icons-png.flaticon.com/512/2885/2885430.png" alt="icon"/>
                                <p className="centerText" >Custom Link</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png " alt="icon" />
                                <p className="centerText" >Mailing List</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/2065/2065157.png"  alt="icon" />
                                <p  className="centerText" >Link Your Socials</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/942/942751.png"  alt="icon" />
                                <p className="centerText" >Text</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/2907/2907004.png" alt="icon" />
                                <p className="centerText" >Music Preview</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/3039/3039386.png" alt="icon" />
                                <p className="centerText" >Video Preview</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/4353/4353181.png" alt="icon" />
                                <p className="centerText" >Product</p>
                            </div>
                        </div>
                </div>

                <div className="block"> 
                    <h5 className="centerText header">Monetizable Blocks</h5>
                    <div className="f p">
                        <div className="left-icons">
                            <img src="https://cdn-icons-png.flaticon.com/512/1632/1632628.png" alt="icon" />
                            <p className="centerText" >Live Streams</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041870.png" alt="icon" />
                            <p className="centerText" >Shoutout Q-As</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055671.png" alt="icon" />
                            <p  className="centerText" >Exclusive Content</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/2228/2228042.png" alt="icon" />
                            <p  className="centerText" >Tipping</p>
                        </div>

                    </div>

                </div>

                <div>
                    <Card>
                        <Card.Header as="h6">Page Header</Card.Header>
                        <Card.Body>
                            <Card.Title as="h6">Add Your Bio</Card.Title>
                            <Card.Text>
                            Name and Bio
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="leftFooter">
                    <img src="https://cdn-icons-png.flaticon.com/512/5525/5525206.png" alt="icon" />
                    <h6 className="centerText" >Add Your First Block</h6>
                    <p className="centerText" >Start Creating Your pages by adding Blocks</p>
                </div>
            </div>
        </div>
    )
}

export default Left;