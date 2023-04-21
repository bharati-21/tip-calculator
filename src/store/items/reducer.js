import produce from "immer";
import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";

let id = 1;

export const initialItems = [
    { uuid: id++, name: 'Awesome Tofu Roast', price: 14, quantity: 1 },
    { uuid: id++, name: 'Vegan Ham Sandwich', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
    if(action.type === ITEM_ADDED) {
        const item = { uuid: id++, quantity: 1, ...action.payload };
        //     return [
        //         ...state,
        //         item
        //     ]

        return produce(state, (draftState) => {
            draftState.push(item)
        })
    }
    if (action.type === ITEM_REMOVED) {
        const filteredItems = state.filter(item => item.uuid !== action.payload);
        return filteredItems;
    }
    if (action.type === ITEM_PRICE_UPDATED) {
        // return state.map(item => item.uuid === action.payload.uuid ? {
        //     ...item, price: action.payload.price
        // } : item)

        return produce(state, (draftState) => {
            const item = draftState.find(item => item.uuid === action.payload.uuid);
            item.price = action.payload.price
        })
    }
    if (action.type === ITEM_QUANTITY_UPDATED) {
        // return state.map(item => item.uuid === action.payload.uuid ? {
        //     ...item, quantity: action.payload.quantity
        // } : item)

        return produce(state, (draftState) => {
            const item = draftState.find(item => item.uuid === action.payload.uuid);
            item.quantity = action.payload.quantity
        })
    }
    return state;
};

export default reducer;
