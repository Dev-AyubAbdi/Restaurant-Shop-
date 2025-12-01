export const intialState = {
  Products: [],
  total: 0,
};
const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        Products: payload.Products,
      };
    case "REMOVE_TO_CART":
      return {
        ...state,
        Products: payload.Products,
      };
      case "CALCULATE_TOTAL_PRICE":
        return {
          ...state,
          total: payload
        }
    default:
      throw new Error("unknow reducer");
  }
};

export default shopReducer;
