import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://agile-sierra-38761.herokuapp.com/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h3 style={{ marginTop: "60px", marginBottom: "40px" }}>Categories</h3>
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
