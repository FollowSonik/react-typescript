import React from "react";

import {useQuery} from "react-query";

import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

// Components
import Item from "./Item/Item";

// Styles
import {Wrapper, StyledButton} from "./App.styles";
import Cart from "./Cart/Cart";
import { Box } from "@material-ui/core";

// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

async function getProducts(): Promise<CartItemType[]> {
  return await (await fetch("https://fakestoreapi.com/products")).json();
}

// eslint-disable-next-line
export default function (): React.ReactElement {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([] as CartItemType[]);

  const {data, isLoading, error} = useQuery<CartItemType[]>(
    "products",
    getProducts
  );

  function getTotalItems(items: CartItemType[]) {
    return items.reduce((acc: number, item) => {
      return acc + item.amount;
    }, 0);
  }

  function handleAddToCart(clickedItem: CartItemType) {
    setCartItems(prev => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find(item => {
        return item.id === clickedItem.id;
      });

      if (isItemInCart) {
        return prev.map(item => {
          return item.id === clickedItem.id
            ? {...item, amount: item.amount + 1}
            : item;
        });
      }

      // First time the item is added.
      return [...prev, {...clickedItem, amount: 1}];
    });
  }

  function handleRemoveFromCart(id: number) {
    setCartItems(prev => {
      return prev.reduce((acc, item) => {
        if (item.id !== id) return [...acc, item];

        if (item.amount === 1) return acc;

        return [...acc, {...item, amount: item.amount - 1}];
      }, [] as CartItemType[]);
    });
  }

  if (isLoading) return <Box sx={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
      minHeight: "100vh"
    }}>
    <CircularProgress />
  </Box>;

  if (error) return <div>Something went wrong!</div>;

  return <Wrapper>
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
    >
      <Cart
        cartItems={cartItems}
        addToCart={handleAddToCart}
        removeFromCart={handleRemoveFromCart}
      />
    </Drawer>
    <StyledButton onClick={() => setIsCartOpen(true)}>
      <Badge
        badgeContent={getTotalItems(cartItems)}
        color="error"
        overlap="rectangular"
      >
        <AddShoppingCartIcon />
      </Badge>
    </StyledButton>
    <Grid container spacing={3}>
      {data?.map(item => {
        return <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
        </Grid>;
      })}
    </Grid>
  </Wrapper>;
}