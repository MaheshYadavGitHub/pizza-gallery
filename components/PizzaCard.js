import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  FormControl,
  MenuItem,
  TextField,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import Image from "next/image";

const PizzaCard = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("regular");
  const [prize, setPrize] = useState(pizza.price[size]);

  useEffect(() => {
    setPrize(pizza.price[size]);
  }, [size]);

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {};

  return (
    <Grid item md={4} key={pizza.id}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            width="220"
            image={pizza.image}
            alt={pizza.name}
          />
        </CardActionArea>
        <Grid
          container
          justifyContent="space-between"
          style={{ paddingRight: "16px", flexWrap: "nowrap" }}
        >
          <CardContent>
            <Typography variant="h6">{pizza.name}</Typography>
            <Typography variant="body2">{pizza.description}</Typography>
          </CardContent>
          {pizza.categoryName === "Veg" ? (
            <Image width={30} height={30} src="/svg/veg.svg" alt="veg" />
          ) : (
            <Image
              width={30}
              height={30}
              src="/svg/non-veg.svg"
              alt="non-veg"
            />
          )}
        </Grid>
        <CardActions style={{ justifyContent: "space-between" }}>
          <FormControl>
            <TextField
              select
              variant="outlined"
              id="size-select"
              value={size}
              label="size"
              size="small"
              onChange={handleSizeChange}
            >
              <MenuItem value="regular">Regular</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </TextField>
          </FormControl>
          <FormControl>
            <TextField
              select
              variant="outlined"
              id="quantity-select"
              value={quantity}
              size="small"
              onChange={handleQuantityChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </TextField>
          </FormControl>
        </CardActions>
        <CardActions style={{ justifyContent: "space-between" }}>
          <Typography style={{ fontWeight: 700 }}>₹ {prize} / pizza</Typography>
          <Button
            size="small"
            color="primary"
            variant="contained"
            style={{ leftMargin: "auto" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PizzaCard;
