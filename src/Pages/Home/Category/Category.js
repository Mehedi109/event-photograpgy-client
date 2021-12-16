import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import img1 from "../../../images/wedding.jpg";

const Category = ({ category }) => {
  const { _id, name, image, price } = category;

  const history = useNavigate();

  const url = `/order/${_id}`;
  const handleOrder = () => {
    history(url);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 320 }} className="details">
        <CardMedia
          component="img"
          height="200"
          image={`data:image/jpg;base64,${image}`}
          alt="green iguana"
          className="card-image"
        />
        <CardContent className="details-content">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions className="card-details-btn">
          {/* <Button size="small">Share</Button> */}
          <Button
            onClick={handleOrder}
            className="details-btn"
            size="small"
            style={{ backgroundColor: "" }}
          >
            See Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Category;
