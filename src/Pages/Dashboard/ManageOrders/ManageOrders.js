import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const ManageOrders = ({ date }) => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = `https://agile-sierra-38761.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://agile-sierra-38761.herokuapp.com/orders/${id}`;
    const proceed = window.confirm("Are you sure, you want to delete");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("data deleted successfully");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2>Total Orders : {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell align="">Event Name</TableCell>
              <TableCell align="">Total Hour</TableCell>
              <TableCell align="">Total Price</TableCell>
              <TableCell align="">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order.email}
                </TableCell>
                <TableCell align="">{order.eventName}</TableCell>
                <TableCell align="">{order.hour}</TableCell>
                <TableCell align="">${order.totalPrice}</TableCell>
                <TableCell align="">
                  <button onClick={() => handleDelete(order._id)}>
                    Remove
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageOrders;
