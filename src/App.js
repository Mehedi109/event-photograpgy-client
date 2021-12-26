import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashoboard";
import AddCategories from "./Pages/Dashboard/AddCategories/AddCategories";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";
import Events from "./Pages/Dashboard/Events/Events";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import PlaceOrder from "./Pages/Order/PlaceOrder/PlaceOrder";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/order/:id"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/addCategories"
                element={
                  <AdminRoute>
                    <AddCategories />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/manageOrders"
                element={
                  <AdminRoute>
                    <ManageOrders />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/myOrders"
                element={
                  <PrivateRoute>
                    <MyOrders />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/events"
                element={
                  <AdminRoute>
                    <Events />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
