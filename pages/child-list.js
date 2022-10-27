import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children.map((child) => (
            <TableRow
              key={child.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {child.name}
              </TableCell>
              <TableCell align="right">{child.email}</TableCell>
              <TableCell align="right">{child.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export async function getServerSideProps() {
  const children = [
    { name: "Matthew", phone: "123456789", email: "matthew@example.com" },
    { name: "Mark", phone: "123456789", email: "mark@example.com" },
  ];

  // Pass data to the page via props
  return { props: { children } };
}
