import "./Header.css";
import logo from "../img/image.png";
import { Link } from "react-router-dom";
import store from "../img/shopping-cart — копия.png";
import {useSelector} from "react-redux";

const Header = () => {
    const totalCount = useSelector(({cage}) => cage.totalCount);

    return (
        <div className="header">
            <div className="flex-header">
                <div className="logo">
                    <Link to="/" className="flex-logo" className="noLink">
                        <div className="flex-logo">
                            <img src={logo} className="img"/>
                            <h2> React-Furniture</h2>
                        </div>
                    </Link>
                </div>

                <div className="cage">
                    <Link to="/cage" className="caption-cage">
                        <div className="flex-cage-header">
                            <img src={store} className="img-store"/>
                            <h3>Корзина <span>{totalCount} </span></h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;