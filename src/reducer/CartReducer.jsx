export const cartReducer = (state, action) => {
  const {type, payload} = action;
  switch(type){
    case "ADD_TO_CART":
      return {...state, cart: payload.products}
    case "REMOVE_TO_CART":
      return {...state, cart: payload.products}
    case "UPDATE_CART":
      return {...state, total: payload.total}
    default:
      throw new Error("No Case Found In Cart Reducer")
  }
}