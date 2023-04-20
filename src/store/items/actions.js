export const ITEM_ADDED = "ITEM_ADDED",
    ITEM_REMOVED = "ITEM_REMOVED",
    ITEM_PRICE_UPDATED = "ITEM_PRICE_UPDATED,",
    ITEM_QUANTITY_UPDATED = "ITEM_QUANTITY_UPDATED";


export const addNewItem = (name, price) => ({
    type: ITEM_ADDED,
    payload: {
        name, price
    }
})

export const removeItem = (id) => ({
    type: ITEM_REMOVED,
    payload: id
})

export const updatePrice = (uuid, price) => ({
    type: ITEM_PRICE_UPDATED,
    payload: {
        uuid, price
    }
})

export const updateQuantity = (uuid, quantity) => ({
    type: ITEM_QUANTITY_UPDATED,
    payload: {
        uuid, quantity
    }
})