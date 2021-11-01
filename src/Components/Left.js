import {Card} from "react-bootstrap";

function Left(){
    return(
        <div className="main-left">
            <div className="f-col">
                <div className="addBlock">
                        <h5 className="centerText header">Add Block</h5>
                        <div className="f p">
                            <div className="left-icons">
                                <img src="https://cdn-icons-png.flaticon.com/512/2885/2885430.png"/>
                                <p className="centerText" >Custom Link</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png"/>
                                <p className="centerText" >Mailing List</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons.flaticon.com/png/512/1968/premium/1968666.png?token=exp=1635784730~hmac=d70ed31a4c0bcab08b182ac61f5a88ee"/>
                                <p  className="centerText" >Link Your Socials</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons.flaticon.com/png/512/1833/premium/1833915.png?token=exp=1635784833~hmac=d9fb852d99bf2b0154538cb1a4fb5aee"/>
                                <p className="centerText" >Text</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons.flaticon.com/png/512/3256/premium/3256266.png?token=exp=1635784861~hmac=c6f4b34c945fa04fafe1bd90a2cfccb6"/>
                                <p className="centerText" >Music Preview</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons.flaticon.com/png/512/1320/premium/1320985.png?token=exp=1635784914~hmac=e38feb447651625c1afbc1014d2e36b9"/>
                                <p className="centerText" >Video Preview</p>
                            </div>

                            <div>
                                <img src="https://cdn-icons-png.flaticon.com/512/4353/4353181.png"/>
                                <p className="centerText" >Product</p>
                            </div>
                        </div>
                </div>

                <div className="block"> 
                    <h5 className="centerText header">Monetizable Blocks</h5>
                    <div className="f p">
                        <div className="left-icons">
                            <img src="https://cdn-icons-png.flaticon.com/512/1632/1632628.png"/>
                            <p className="centerText" >Live Streams</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041870.png"/>
                            <p className="centerText" >Shoutout Q-As</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons.flaticon.com/png/512/1642/premium/1642735.png?token=exp=1635786229~hmac=4fd28bf9886b534bf210bfce30fce889"/>
                            <p  className="centerText" >Exclusive Content</p>
                        </div>

                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/2228/2228042.png"/>
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
                    <img src="https://cdn-icons-png.flaticon.com/512/5525/5525206.png"/>
                    <h6 className="centerText" >Add Your First Block</h6>
                    <p className="centerText" >Start Creating Your pages by adding Blocks</p>
                </div>
            </div>
        </div>
    )
}

export default Left;