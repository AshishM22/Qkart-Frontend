import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography, } from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  // console.log(product);
  const token = localStorage.getItem("token");

  return (
    <Card className="card">
       <CardMedia  component="img" image={product.image} alt={product.name} />
       <CardContent>
            <Typography> {product.name} </Typography>
            <Typography fontWeight="700" paddingY="0.5rem"> ${product.cost} </Typography>
            <Rating name="read-only" value={product.rating} precision={0.5} readOnly  />
       </CardContent>

      <CardActions className="card-actions">
        <Button
          class="card-button"
          fullWidth
          variant=""
          color="primary"
          card-button 
          startIcon={<AddShoppingCartOutlined />}
          onClick={() => handleAddToCart(product._id,1,token)}
        >
           {/* token, items, products, productId, qty, */}
          ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
