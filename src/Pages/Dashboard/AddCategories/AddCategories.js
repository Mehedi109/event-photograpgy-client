import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddCategories = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("eventName", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", img);
    console.log(formData);
    fetch("https://agile-sierra-38761.herokuapp.com/addCategories", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("added");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("eventName")}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <input
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("price", { required: true })}
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />{" "}
        <br />
        <textarea
          rows="4"
          cols="6"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("description", { required: true })}
          placeholder="Hour"
          onChange={(e) => setDescription(e.target.value)}
          required
        />{" "}
        <br />
        <input
          accept="image/*"
          multiple
          type="file"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("image", { required: true })}
          placeholder="Image"
          onChange={(e) => setImg(e.target.files[0])}
          required
        />{" "}
        <Button variant="contained" type="submit">
          Add
        </Button>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddCategories;
