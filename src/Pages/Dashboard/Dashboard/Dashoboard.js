import { Button } from "@mui/material";
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/dashboard/addCategories">
        <Button color="inherit">Add Categories</Button>
      </Link>
    </div>
  );
};

export default Dashboard;
