import {useDispatch} from "react-redux";
import {removeItem} from "../../redux/cage";

const CageItem = ({img, name, availableNames, manufacturer, price, object}) => {
    const dispatch = useDispatch();

    const checkDelete = () => {
        if (window.confirm('Вы хотите удалить товар ?') ) {
            dispatch(removeItem(object));
        }
    }

    return (
        <div className="flex-cageItems" onClick={() => checkDelete()}>
            <img src={img}/>
            <div className="flex-textBlock">
                <p>{name}</p>
                <p>{manufacturer}</p>
                <p>{availableNames}</p>
                <p className="price">Сумма: {price} $</p>
            </div>
            <div>
            </div>
        </div>
    );
}

export default CageItem;