const reducer = (state, action) => {
  switch (action.type) {
    case "changeMenuVisibility":
      return {
        ...state,
        isMenuVisible: action.payload
      };
    default:
      return state;
  }
};

export default reducer;