const initialState = {
    sortBy: {
        type: 'rating',
        order: 'desc',
    },
    material: null,
    filterType: null
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MATERIAL': {
            return {
                ...state,
                material: action.payload
            }
        }
        case 'SET_TYPE': {
            return {
                ...state,
                filterType: action.payload
            }
        }
        case 'SET_SORT_BY': {
            return {
                ...state,
                sortBy: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const setMaterial = (matIndex) => ({
    type: 'SET_MATERIAL',
    payload: matIndex
});

export const setType = (typeIndex) => ({
    type: 'SET_TYPE',
    payload: typeIndex
});

export const setSortBy = (sort) => ({
    type: 'SET_SORT_BY',
    payload: sort
});

export default filter;