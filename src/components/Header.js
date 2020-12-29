import {Link} from 'react-router-dom'
import { Button } from "atomize";


export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">WatchList</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/">Watch List</Link>
                        </li>

                        <li>
                            <Link to="/watched">Watched</Link>
                        </li>

                        <li>
                            <Button
                                h="2.5rem"
                                p={{ x: "1rem" }}
                                textSize="body"
                                textColor="black900"
                                bg="warning700"
                                hoverTextColor="info900"
                                hoverBg="success800"
                                border="1px solid"
                                hoverBorderColor="info900"
                                m={{ r: "0.5rem" }}
                            >
                                <Link to="/add" className="">+ Add</Link>
                            </Button>
                        </li>


                    </ul>
                </div>
            </div>
        </header>
    )
}
