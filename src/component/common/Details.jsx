import {useDispatch, useSelector} from "react-redux";
import "../Main/Main.css";
import React from "react";
import {Link} from "react-router-dom";
import BedItem from "../Main/Bed/BedItem";
import {addGood} from "../../redux/cage";

const Details = () => {
    const dispatch = useDispatch();

    const currentItem = useSelector(({furniture}) => furniture.currentItem);

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [indexSort, setIndexSort] = React.useState(0);

    const itemsBed = useSelector(({furniture}) => furniture.itemsBed);

    const sortRef = React.useRef();

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const onSelectItem = (index) => {
        setVisiblePopup(false);
        setIndexSort(index);
    };

    const onClickAddGood = () => {
        const objInner = {
            id: currentItem.id,
            imageUrl: currentItem.imageUrl,
            name: currentItem.name,
            manufacturer: currentItem.manufacturer,
            availableNames: currentItem.availableNames && currentItem.availableNames[indexSort],
            availableColors: currentItem.availableColors && currentItem.availableColors[indexSort],
            price: currentItem.price
        };

        onAddGood(objInner);
    }

    const onAddGood = (obj) => {
        dispatch(addGood(obj));
    };

    const handleChangeImg = (e) => {
        const mainUrl = document.getElementsByClassName('img-main')[0].src;
        const nextUrl = e.target.src;
        document.getElementsByClassName('img-main')[0].src = nextUrl;
        e.target.src = mainUrl;
    }


    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };


    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <>
            <div className="details">
                <div className="img-block-details">
                    <img src={currentItem.imageUrl} className="img-main"/>
                    <div className="flex-det-img-small">
                        {
                            currentItem.availableImages.map((imgs, index) => <img src={imgs} key={`${imgs}_${index}`}
                                                                                  className="img-small"
                                                                                  onClick={handleChangeImg}/>)
                        }
                    </div>
                </div>
                <div className="desc-details">
                    <div>
                        <h2>Характеристики товара</h2>

                        <div ref={sortRef} className="sort">
                            {
                                currentItem.availableNames &&
                                <div className="sort__label">
                                    <b>Выбор цвета:</b>
                                    <span onClick={toggleVisiblePopup}>{currentItem.availableNames[indexSort]}</span>
                                </div>
                            }
                            {visiblePopup && (
                                <div className="sort__popup">
                                    <ul>
                                        {
                                            currentItem.availableNames.map((obj, index) => (
                                                <li
                                                    onClick={() => onSelectItem(index)}
                                                    className={currentItem.availableNames === obj ? 'active' : ''}
                                                    key={`${obj}_${index}`}>
                                                    {obj}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="text-block">
                            <p><b><u>{currentItem.name}</u></b></p>
                            <p>Производитель: {currentItem.manufacturer}</p>

                            {currentItem.availableNames && <p>Доступные цвета:</p>}
                            <div className="inlineBlock">
                                {
                                    currentItem.availableColors && currentItem.availableColors.map((img) => <img
                                        className="av-colors" src={img}/>)
                                }
                                <br/>
                                {
                                    currentItem.availableNames && currentItem.availableNames.map((text) => <span
                                        className="av-names">{text}</span>)
                                }
                            </div>

                            <p>Высота: {currentItem.height}</p>
                            <p>Ширина: {currentItem.width}</p>
                            <p>Цена: <b>{currentItem.price}</b></p>
                            <button onClick={onClickAddGood}>Купить</button>
                            <Link to="/bed">
                                <button>Вернуться назад</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <center><h2>Похожие товары</h2></center>
                <div className="footer-details">
                    {
                        itemsBed.map(obj => currentItem.id !== obj.id ? <BedItem obj={obj} key={`${obj.id}_${obj.name}` }/> : "")
                    }
                </div>
            </div>
        </>
    );
}

export default Details;