import axios from "axios";


const initialState = {
    items: [],
    itemsBed: [],
    currentItem: [],
    isLoading: false,
    currentPage: 1,
    limit: 3
};

const furniture = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FURNITURE": {
            return {
                ...state,
                items: action.payload
            }
        }
        case 'NEXT_PAGE': {
            let next = state.currentPage < Math.ceil(state.items.length / state.limit) ? state.currentPage + 1 : Math.ceil(state.items.length / state.limit);
            return {
                ...state,
                currentPage: next
            }
        }
        case 'PREV_PAGE': {
            let prev = state.currentPage > 1 ? state.currentPage - 1 : state.currentPage;
            return {
                ...state,
                currentPage: prev
            }
        }
        case 'SET_FURNITURE_BED': {
            return {
                ...state,
                itemsBed: action.payload,
                isLoading: true
            }
        }
        case 'SET_CURRENT_ITEM': {
            return {
                ...state,
                currentItem: action.payload,
            }
        }
        case 'SET_LOADING': {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: {
            return state;
        }
    }
}


export const nextPage = () => ({
    type: "NEXT_PAGE"
});
export const prevPage = () => ({
    type: "PREV_PAGE"
});

export const setFurniture = (items) => ({
    type: "SET_FURNITURE",
    payload: items
});

export const setFurnitureBed = (items1) => ({
    type: "SET_FURNITURE_BED",
    payload: items1
});

export const setCurretnItem = (items5) => ({
    type: "SET_CURRENT_ITEM",
    payload: items5
});

export const setLoaded = (value) => ({
    type: "SET_LOADING",
    payload: value
});

export const fetchFurnitureBed = (material, filterType, sortBy, currentPage, limit) => (dispatch) => {
        dispatch(setLoaded(false));
        axios.get(`/bed?${material !== null ? `material=${material}` : ''}&${filterType !== null ? `filterType=${filterType}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order == undefined ? 'desc' : sortBy.order}&_page=${currentPage}&_limit=${limit}`).then(({data}) => {
            dispatch(setFurnitureBed(data));
            dispatch(setLoaded(true));
        })
};

export const fetchFurnitureBedNoFilter = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/bed`).then(({data}) => {
        dispatch(setFurniture(data));
        dispatch(setLoaded(true));
    })
};

export default furniture;