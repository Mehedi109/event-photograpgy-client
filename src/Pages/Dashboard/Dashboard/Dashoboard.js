import { Button } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { user, admin, logOut } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {!admin && user.email && (
        <Box>
          <Link to="/dashboard/myOrders" className="dashboard-menu">
            <Button color="inherit">My Orders</Button>
          </Link>{" "}
          <br />
        </Box>
      )}
      {admin && (
        <Box>
          <Link to="/dashboard/addCategories" className="dashboard-menu">
            <Button color="inherit">Add Event</Button>
          </Link>{" "}
          <br />
          <Link to="/dashboard/manageOrders" className="dashboard-menu">
            <Button color="inherit">Manage Orders</Button>
          </Link>{" "}
          <br />
          <Link to="/dashboard/events" className="dashboard-menu">
            <Button color="inherit">Events</Button>
          </Link>{" "}
          <br />
          <Link to="/dashboard/makeAdmin" className="dashboard-menu">
            <Button color="inherit">Make Admin</Button>
          </Link>{" "}
          <br />
        </Box>
      )}
      <Link to="/home" className="dashboard-menu">
        <Button color="inherit">Home</Button>
      </Link>{" "}
      <br />
      <Button color="inherit" onClick={logOut}>
        Logout
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet></Outlet>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
