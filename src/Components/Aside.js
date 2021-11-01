import {Stack} from "react-bootstrap";

function Aside(){
    return(
        <div className="aside">
            <Stack gap={1}>
                <div className="asideIcon border">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/996/996334.png" />
                    </div>
                    <div>
                        <p> My Page </p>
                    </div>
                </div>
                <div className="bg-light border">Second item</div>
                <div className="bg-light border">Third item</div>
            </Stack>
        </div>
    )
}

export default Aside;