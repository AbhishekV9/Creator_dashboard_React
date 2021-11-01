import {Stack} from "react-bootstrap";

function Aside(){
    return(
        <div className="aside">
            <Stack gap={3}>
                <div className="asideIcon logo ">
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/15/premium/15640.png?token=exp=1635780973~hmac=0437a996ad0f604f8dc3170f9952b02b" alt="icon"  />
                    </div>
                </div>
                <div className="asideIcon b s">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/996/996334.png" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> My Page </p>
                    </div>
                </div>
                <div className="asideIcon">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1319/1319861.png" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> Monetize </p>
                    </div>
                </div>
                <div className="asideIcon">
                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/2096/premium/2096983.png?token=exp=1635770373~hmac=a861e99922b562f92f8e24725907fc95" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> Analytics </p>
                    </div>
                </div>
                <div className="asideIcon">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135673.png" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> Earnings </p>
                    </div>
                </div>
                <div className="asideIcon">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/809/809522.png" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> Refferals </p>
                    </div>
                </div>
                <div className="asideIcon">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/900/900797.png" alt="icon"  />
                    </div>
                    <div>
                        <p className="text"> Settings </p>
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default Aside;