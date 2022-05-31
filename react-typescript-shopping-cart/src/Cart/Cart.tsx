import CartItem from "../CartItem/CartItem";

// Styles
import Wrapper from "./Cart.styles";

// Types
import {CartItemType} from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart(clickedItem: CartItemType): void;
  removeFromCart(id: number): void;
}

// eslint-disable-next-line
export default function ({
  cartItems,
  addToCart,
  removeFromCart
}: Props): React.ReactElement {
  function calculateTotal(items: CartItemType[]) {
    return items.reduce((acc: number, item) => {
      return acc + item.amount * item.price;
    }, 0);
  }

  return <Wrapper>
    <h2>Your Shopping Cart</h2>
    {cartItems.length ? cartItems.map(item => {
      return <CartItem
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />;
    }) : "There's no items in the cart."}
    <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
  </Wrapper>
}