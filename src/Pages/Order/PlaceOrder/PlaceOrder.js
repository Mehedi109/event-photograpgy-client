import { Grid, Typography, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const PlaceOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [hour, setHour] = useState();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(hour);

  const url = `https://agile-sierra-38761.herokuapp.com/categories/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order.price);
  const onSubmit = (data) => {
    fetch("https://agile-sierra-38761.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order Placed");
        }
      });
  };
  return (
    <div>
      <Navigation></Navigation>
      <h3 style={{ marginTop: "40px", marginBottom: "50px" }}>Place Order</h3>
      <Container>
        <Grid container spacing={2} style={{ marginBottom: "30px" }}>
          <Grid item xs={6} md={6}>
            <img
              src={`data:image/jpg;base64,${order.image}`}
              alt=""
              style={{ width: "300px" }}
            />
            <h4>{order.eventName}</h4>
            <h4>${order.price} / hour</h4>
            <p>{order.description}</p>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography>Order</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                style={{ margin: "5px" }}
                defaultValue={user.displayName}
                {...register("name")}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={user.email}
                {...register("email", { required: true })}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={order.eventName}
                {...register("eventName", { required: true })}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                defaultValue={""}
                {...register("address")}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                {...register("hour")}
                placeholder="Hour"
                onChange={(e) => setHour(e.target.value)}
              />{" "}
              <br />
              <input
                style={{ margin: "5px" }}
                {...register("totalPrice", { required: true })}
                value={hour * parseInt(order?.price)}
              />{" "}
              <br />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
              <input type="submit" />
            </form>
            <Typography>Total Cost : {hour * order.price}</Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default PlaceOrder;
