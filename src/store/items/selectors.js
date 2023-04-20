import { createSelector } from 'reselect';

export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectSubTotal = createSelector([selectItems], (items) =>
  items.reduce((accum, item) => accum + item.price * item.quantity, 0)
);
export const selectTipAmount = createSelector(
  [selectSubTotal, selectTipPercentage],
  (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);
export const selectTotal = createSelector(
  [selectSubTotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);
export const selectItemTotal = createSelector(
  selectItem,
  (item) => item.price * item.quantity
);
