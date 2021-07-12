import React from "react";

const Category = ({items, onClickMat, activeMat}) => {
    const handleOnChange = (event, index) => {
        if (event.target.checked == true) {
            onClickMat(index);
        }
    }

    return (
        <>
            <div className="category">
                <h3>{items.name}</h3>

                <div className="flex-labels">
                    <label><input
                        checked={activeMat == null ? 'checked   ' : ''}
                        type="radio" name={items.name} key="все" onChange={(event) => handleOnChange(event, null)}/>Все
                    </label>
                    {
                        items.material.map((el, index) => <label><input
                            checked={index == activeMat ? 'checked   ' : ''}
                            type="radio" name={`${items.name}`} key={`${el}_${index}`}
                            onChange={(event) => handleOnChange(event, index)}/>{el}</label>)
                    }
                    <br/>
                </div>
                <button onClick={() => onClickMat(null)}>Сбросить всё</button>
            </div>
        </>
    );
}

export default Category;