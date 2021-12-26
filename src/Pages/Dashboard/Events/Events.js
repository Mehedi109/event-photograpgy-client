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
import { Button } from "@mui/material";

const Events = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = `https://agile-sierra-38761.herokuapp.com/categories`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://agile-sierra-38761.herokuapp.com/categories/${id}`;
    const proceed = window.confirm("Are you sure to remove the event category");
    if (proceed) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Event has removed");
            const remaining = events.filter((event) => event._id !== id);
            setEvents(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h4 className="mt-4 mb-3 text-danger">All Event Categories</h4>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments Table">
          <TableHead>
            <TableRow>
              <TableCell>Event Name</TableCell>
              <TableCell align="">Image</TableCell>
              <TableCell align="">Price Per Hour</TableCell>
              <TableCell align="">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event) => (
              <TableRow
                key={event._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="">{event.eventName}</TableCell>
                <TableCell align="">
                  <img
                    src={`data:image/jpg;base64,${event.image}`}
                    alt=""
                    width="100"
                  />
                </TableCell>
                <TableCell align="">${event.price}</TableCell>
                <TableCell align="">
                  <Link
                    to="/dashboard/addCategories"
                    className="dashboard-menu"
                  >
                    <Button color="inherit">Add Event</Button>
                  </Link>
                  <button onClick={() => handleDelete(event._id)}>
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

export default Events;
