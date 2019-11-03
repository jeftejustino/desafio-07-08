import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { id, amount } = action;
        const index = draft.findIndex(p => p.id === id);
        if (index >= 0) {
          draft[index].amount = Number(amount);
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.id);
        if (index >= 0) {
          draft.splice(index, 1);
        }
      });
    default:
      return state;
  }
}
