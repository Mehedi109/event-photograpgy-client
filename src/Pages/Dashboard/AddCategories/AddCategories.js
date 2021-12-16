import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddCategories = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [img, setImg] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data.image.name);
    if (!img) {
      return;
    }
    // data.image = img.name;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", img);
    console.log(formData);
    fetch("http://localhost:5000/addCategories", {
      method: "POST",
      body: formData,

      // headers: {
      //   'content-type': 'application/json',
      // },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("added");
    // console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          //   defaultValue="test"
          style={{ padding: "5px", margin: "5px", width: "30%" }}
          {...register("name")}
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
        {/* <Input accept="image/*" multiple type="file" /> <br /> */}
        <Button variant="contained" type="submit">
          Add
        </Button>
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        {/* <input type="submit" /> */}
      </form>
    </div>
  );
};

export default AddCategories;
