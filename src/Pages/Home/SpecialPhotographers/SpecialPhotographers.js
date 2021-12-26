import React from "react";
import { useNavigate } from "react-router-dom";
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
import img1 from "../../../images/photographer-1.jpg";
import img2 from "../../../images/photographer-2.jpg";
import img3 from "../../../images/photographer-3.jpg";
import img4 from "../../../images/photographer-4.jpg";

const SpecialPhotographers = () => {
  return (
    <Container>
      <h3 style={{ marginTop: "50px" }}>Meet Our Special Photographers</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: "50px" }}>
          <Card sx={{ minWidth: 320 }} className="details">
            <CardMedia
              component="img"
              height="200"
              image={img1}
              alt="green iguana"
              className="card-image"
            />
            <CardContent className="details-content">
              <Typography gutterBottom variant="h5" component="div">
                Ratul Islam
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                $15/hour
              </Typography>
            </CardContent>
            <CardActions className="card-details-btn">
              <Button
                className="details-btn"
                size="small"
                style={{ backgroundColor: "" }}
              >
                Book
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: "50px" }}>
          <Card sx={{ minWidth: 320 }} className="">
            <CardMedia
              component="img"
              height="200"
              image={img4}
              alt="green iguana"
              className="card-image"
            />
            <CardContent className="details-content">
              <Typography gutterBottom variant="h5" component="div">
                Rahat Islam
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                $18/hour
              </Typography>
            </CardContent>
            <CardActions className="card-details-btn">
              <Button
                className="details-btn"
                size="small"
                style={{ backgroundColor: "" }}
              >
                Book
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ marginTop: "50px" }}>
          <Card sx={{ minWidth: 320 }} className="details">
            <CardMedia
              component="img"
              height="200"
              image={img3}
              alt="green iguana"
              className="card-image"
            />
            <CardContent className="details-content">
              <Typography gutterBottom variant="h5" component="div">
                Khosru Islam
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                $20/hour
              </Typography>
            </CardContent>
            <CardActions className="card-details-btn">
              <Button
                className="details-btn"
                size="small"
                style={{ backgroundColor: "" }}
              >
                Book
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpecialPhotographers;
