import { createContext, useContext, useReducer } from "react";
import shopReducer, { intialState } from "./ShopReducer";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, intialState);

  const addToCart = (product) => {
    if (!product) return;
    const addProduct = state.Products.concat(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        Products: addProduct,
      },
    });
  };

  const removeTOCart = (product) => {
    const removeProduct = state.Products.filter((pro) => pro.id !== product.id);

    dispatch({
      type: "REMOVE_TO_CART",
      payload: {
        Products: removeProduct,
      },
    });
  };
  const values = {
    Products: state.Products,
    total: state.total,
    addToCart,
    removeTOCart,
  };
  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("use inside of context");
  }
  return context;
};

export default useShop;
