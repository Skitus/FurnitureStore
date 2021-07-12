import React from "react";


const SortBy = ({activeType, items, onClickType}) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    const activeLabel = items.find(obj => obj.type === activeType.type).name;

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    };

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    const onSelectItem = (index) => {
        if (onClickType) {
            onClickType(index);
        }
        setVisiblePopup(false);
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && (
                <div className="sort__popup">
                    <ul>
                        {items &&
                        items.map((obj, index) => (
                            <li
                                onClick={() => onSelectItem(obj)}
                                className={activeType === obj.type ? 'active' : ''}
                                key={`${obj.type}_${index}`}>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SortBy;