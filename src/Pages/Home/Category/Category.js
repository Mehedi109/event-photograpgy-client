import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import img1 from "../../../images/wedding.jpg";

const Category = ({ category }) => {
  const { _id, eventName, image, price, description } = category;

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
          alt=""
          className="card-image"
        />
        <CardContent className="details-content">
          <Typography gutterBottom variant="h5" component="div">
            {eventName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 40)}.....
          </Typography>
        </CardContent>
        <CardActions className="card-details-btn">
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
