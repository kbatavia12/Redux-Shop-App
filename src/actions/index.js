export const addToCart = (name, description, price) => {
  return {
    type: "ADD_TO_CART",
    payload: name,
    price: price,
    description: description,
  };
};

export const getNavigatorState = (stateDesc) => {
  return {
    type: 'GET_PAGE_TYPE',
    payload: {
      domain: stateDesc.domain,
      subdomain: stateDesc.subdomain
    }
  };
};
