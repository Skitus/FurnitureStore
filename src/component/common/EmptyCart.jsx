import {Link} from "react-router-dom";
import "../Main/Main.css";

const EmptyCart = () => {
    return (
        <div className="emptyCart">
            <div>Корзина пуста !!!</div>
            <Link to="/bed">
                <button>
                    Вернуться назад
                </button>
            </Link>
        </div>
    );
}

export default EmptyCart;