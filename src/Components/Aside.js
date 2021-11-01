import {Stack} from "react-bootstrap";

function Aside(){
    return(
        <div className="aside">
            <Stack gap={3}>
                <div className="asideIcon logo ">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2991/2991145.png" alt="icon"  />
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
                        <img src="https://cdn-icons-png.flaticon.com/512/4599/4599504.png" alt="icon"  />
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