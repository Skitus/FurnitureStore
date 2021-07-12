import "../Main.css";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {fetchFurnitureBed, fetchFurnitureBedNoFilter} from "../../../redux/furniture";
import BedItem from "./BedItem";
import SortBy from "../SortBy";
import {setMaterial, setSortBy, setType} from "../../../redux/filter";
import Category from "../Category";
import EmptyCage from "../../common/EmptyCage";
import Paginater from "../../common/Paginater";

const setItems = [{name: 'популярности', type: 'rating'}, {name: 'цене', type: 'price'}, {
    name: 'алфавиту',
    type: 'name',
    order: 'asc'
}
];

const setCategory = [{"name": "Материал", "material": ["Металические", "ЛДСП", "Кожзам"]},
    {"name": "Тип", "material": ["Двуспальные", "Односпальные", "Кровать машина"]},
    {"name": "Цвет", "material": ["Венге", "Ясень", "Без Цветов"]}
];


const Bed = React.memo(() => {
        const dispatch = useDispatch();
        const isLoading = useSelector(({furniture}) => furniture.isLoading);
        const itemsBed = useSelector(({furniture}) => furniture.itemsBed);
        const sortBy = useSelector(({filter}) => filter.sortBy);
        const material = useSelector(({filter}) => filter.material);
        const filterType = useSelector(({filter}) => filter.filterType);
        const currentPage = useSelector(({furniture}) => furniture.currentPage);
        const limit = useSelector(({furniture}) => furniture.limit);

        React.useEffect(() => {
            dispatch(fetchFurnitureBed(material, filterType, sortBy, currentPage, limit));
            dispatch(fetchFurnitureBedNoFilter());
        }, [material, filterType, sortBy, currentPage]);


        const onSelectSortBy = React.useCallback((sort) => {
            dispatch(setSortBy(sort))
        }, []);

        const onSelectMaterial = React.useCallback((mat) => {
            dispatch(setMaterial(mat))
        }, []);

        const onSelectType = React.useCallback((t) => {
            dispatch(setType(t))
        }, []);


        const [value, setValue] = useState('');

        const filterItems = itemsBed.filter(i => {
            return i.name.toLowerCase().includes(value.toLowerCase());
        });

        const autohandler = (e) => {
            setValue(e.target.textContent);
        }

        return (
            <>
                <div className="right-sort">
                    <SortBy activeType={sortBy} items={setItems} onClickType={onSelectSortBy}/>
                </div>
                <div className="flex-bed">
                    <div className="menuCategory">
                        <h2>Фильтры</h2>

                        <Category activeMat={material} items={setCategory[0]} onClickMat={onSelectMaterial}/>
                        <Category activeMat={filterType} items={setCategory[1]} onClickMat={onSelectType}/>

                    </div>
                    <div>
                        <div className="bed">
                            <div className="autoCompletePlace">

                                <input value={value} type="text" name="search" className="search" placeholder="Поиск"
                                       onChange={(event) => setValue(event.target.value)}/>

                                <ul>
                                    {
                                        value && filterItems.map(obj => <li className="autoComplete"
                                                                            onClick={autohandler}>{obj.name}</li>)
                                    }
                                </ul>
                            </div>

                            {
                                isLoading ? filterItems.length == 0 ? <EmptyCage/> : filterItems.map(obj => <BedItem
                                    obj={obj}
                                    key={`${obj.id}_${obj.name}`}/>) : "Подождите идёт ожидание..."
                            }
                        </div>
                        <div className="footer-bed">
                            <Paginater/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
);

export default Bed;