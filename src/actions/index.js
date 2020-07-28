export const addToCart = (name, description, price) => {
  return {
    type: "ADD_TO_CART",
    payload: name,
    price: price,
    description: description,
  };
};
