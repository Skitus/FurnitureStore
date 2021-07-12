import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurretnItem} from "../../../redux/furniture";


const BedItem = ({obj}) => {
    const dispatch = useDispatch();

    const handleClickItem = () => {
        dispatch(setCurretnItem(obj));
    }


    return (
        <div>
            <div className="block-bed">
                <div className="flex-beds-row">
                    <Link to="/bed/details">
                        <img src={obj.imageUrl} onClick={handleClickItem}/>
                    </Link>
                    <div className="flex-beds-column">
                        {
                            obj.availableColors && obj.availableColors.map((t, index) => <img key={`${t}_${index}`}
                                                                                              src={t}/>)
                        }
                    </div>
                </div>
                <p className="name">{obj.name}</p>
                <p className="price">{obj.price}</p>
                <Link to ="/bed/details">
                    <button onClick={handleClickItem} className="buttonClickDetails">Купить</button>
                </Link>
            </div>
        </div>
    );
}

export default BedItem;