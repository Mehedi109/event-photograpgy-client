import { Grid, Container, Typography, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchReviews } from "../../../redux/slices/reviewSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://agile-sierra-38761.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, id) => {
    fetch("https://agile-sierra-38761.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Posted Successfully");
        }
      });
  };

  return (
    <div style={{ marginTop: "60px", marginBottom: "60px" }}>
      <div className="show-review">
        <Container>
          <h3 style={{ marginBottom: "40px", color: "red" }}>Reviews</h3>
          <Grid container spacing={2}>
            {reviews.map((review) => (
              <div>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ minWidth: 320, padding: "13px", margin: "13px" }}
                    className=""
                  >
                    <CardContent
                      className="details-content"
                      sx={{ padding: "15px" }}
                    >
                      <Typography gutterBottom variant="h5" component="div">
                        <h5>{review.name}</h5>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <h5>{review.email}</h5>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.body}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Rating
                          className="text-danger"
                          initialRating={review.rating}
                          emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                        ></Rating>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            ))}
          </Grid>
        </Container>
      </div>
      <h3 style={{ marginTop: "20px", marginBottom: "20px" }}>
        Leave A Review
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("name")}
          placeholder="Name"
          style={{ padding: "8px", margin: "16px", width: "30%" }}
          type=""
        />{" "}
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          style={{ padding: "8px", margin: "16px", width: "30%" }}
          type=""
        />{" "}
        <br />
        <input
          {...register("rating", { required: true })}
          placeholder="Place rating out of 5"
          style={{ padding: "8px", margin: "16px", width: "30%" }}
        />{" "}
        <br />
        <textarea
          rows="4"
          cols="6"
          {...register("body", { required: true })}
          placeholder="Body"
          style={{ padding: "", margin: "16px", width: "30%" }}
        />{" "}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export default Review;
