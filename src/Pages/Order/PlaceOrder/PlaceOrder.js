import { ContactsOutlined } from "@mui/icons-material";
import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import Header from "../../Shared/Header/Header";

const PlaceOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [hour, setHour] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const url = `http://localhost:5000/categories/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  console.log(order.price);
  const onSubmit = (data) => {
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      {/* <Header></Header> */}
      <h2>Place Order</h2>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <img
            src={`data:image/jpg;base64,${order.image}`}
            alt=""
            style={{ width: "300px" }}
          />
          {/* image={`data:image/jpg;base64,${image}`} */}
          <h2>{order.name}</h2>
          <h2>${order.price} / hour</h2>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography>Order</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="Mehedi" {...register("name")} /> <br />
            <input
              defaultValue="mehedi@gmail.com"
              {...register("email", { required: true })}
            />{" "}
            <br />
            <input defaultValue={""} {...register("address")} /> <br />
            <input
              {...register("hour")}
              // value={order.hour}
              defaultValue={1}
              onChange={(e) => setHour(e.target.value)}
              // onChange={(e) => console.log(e.target.value)}
            />{" "}
            <br />
            <input
              {...register("totalPrice")}
              defaultValue={111}
              value={1 * order.price || hour * order?.price}
            />{" "}
            <br />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
          </form>
          <Typography>
            Total Cost : {1 * order.price && hour * order.price}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceOrder;
