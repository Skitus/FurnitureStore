import "./Main.css";
import preview from "../img/abstrakcii2.png";
import {Link} from "react-router-dom";
import React from "react";

const Main = () => {

    return (
        <div className="main">
            <div className="img-block">
                <img src={preview} className="img-preview"/>
            </div>

            <div className="caption-goods">
                <h1>Каталог товаров</h1>
            </div>

            <div className="listOfGoods">
                <div className="flex-goods">

                    <div className="goods">
                        <Link to="/bed">
                            <img className="goods-img" src="https://redlight.com.ua/images/cat/em7LUPM7gf.jpg"/>
                        </Link>
                        <h2 className="goods-caption">Кровати</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;