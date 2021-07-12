import React from "react";
import {useDispatch} from "react-redux";
import {nextPage, prevPage} from "../../redux/furniture";

const Paginater = React.memo(() => {
    const dispatch = useDispatch();

    const onNextPage = React.useCallback(() => {
        dispatch(nextPage())
    }, []);

    const onPrevPage = React.useCallback(() => {
        dispatch(prevPage())
    }, []);

    return (
        <>
            <div onClick = {onNextPage}>Вперёд </div>
            <div onClick = {onPrevPage}>Назад</div>
        </>
    );
});

export default Paginater;