import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h2>Categories</h2>
      <Container>
        <Grid container spacing={3}>
          {categories.map((category) => (
            <Category key={category._id} category={category}></Category>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Categories;
