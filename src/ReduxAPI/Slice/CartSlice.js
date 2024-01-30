import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const { cartitems, totalAmount } = state;
      const { id, name, sell_price, quantity, images, image } = action.payload;
      let currentTotal = totalAmount;
      const item = cartitems?.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        currentTotal = parseFloat(currentTotal) + parseFloat(sell_price);
      } else {
        let sum = parseFloat(sell_price * quantity).toFixed(2);
        cartitems.push({
          id: id,
          name: name,
          sell_price: sell_price,
          quantity: quantity,
          images: images,
          image : image,
        });
        console.log(cartitems, "ss");
        currentTotal = parseFloat(currentTotal) + parseFloat(sum);
      }
      state.totalAmount = parseFloat(currentTotal);
    },
    removeCart: (state, action) => {
      const { cartitems, totalAmount } = state;
      const { id, sell_price, allRemove } = action.payload;
      let currentTotal = totalAmount;
      const item = cartitems?.find((item) => item.id === id);
      if (item) {
        if (allRemove) {
          const index = cartitems.indexOf(item);
          cartitems.splice(index, 1);
          currentTotal = 0;
        } else {
          if (cartitems.length === 0) {
            currentTotal = 0;
          } else {
            currentTotal -= sell_price;
            item.quantity -= 1;
            if (item.quantity <= 0) {
              const index = cartitems.indexOf(item);
              cartitems.splice(index, 1);
              if (cartitems.length === 0) {
                currentTotal = 0;
              }
            }
          }
        }
      }
      state.totalAmount = parseFloat(currentTotal);
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
