const initialState = {
    item: [],
    totalCount: 0,
    totalPrice: 0
};

const cage = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_GOOD": {
            const payload = action.payload.price;
            const copyPrice = state.item.length != 0 ? state.item.reduce((payload, obj) => obj.price + payload, payload) : payload;

            const copyCount = [...state.item, action.payload].length;
            return {
                ...state,
                item: [...state.item, action.payload],
                totalPrice: copyPrice,
                totalCount: copyCount
            }
        }
        case "DELETE_GOOD": {
            const copyPrice = state.totalPrice - action.payload.price;
            const copyCount = state.totalCount - 1;
            const removeNewItems = [
                ...state.item
            ]
            const specialObj = action.payload;

            for (let key in removeNewItems) {
                if (removeNewItems[key] == specialObj) {
                    delete removeNewItems[key];
                }
            }

            const newItems = removeNewItems.filter(n => n);

            return {
                ...state,
                item: newItems,
                totalPrice: copyPrice,
                totalCount: copyCount
            }
        }
        default: {
            return state;
        }
    }
}

export const addGood = (obj) => ({
    type: 'ADD_GOOD',
    payload: obj
});

export const removeItem = (obj) => ({
    type: 'DELETE_GOOD',
    payload: obj
});

export default cage;

