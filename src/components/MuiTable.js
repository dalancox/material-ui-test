import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

function MuiTable() {
    return (
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map((row) => (
                  <TableRow
                    key={row.id}
                    >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
  
  const data = [{
    "id": 1,
    "first_name": "Gibbie",
    "last_name": "Stammler",
    "email": "gstammler0@acquirethisname.com",
    "gender": "Male",
    "ip_address": "165.164.29.230"
  }, {
    "id": 2,
    "first_name": "Dane",
    "last_name": "Brightwell",
    "email": "dbrightwell1@goo.ne.jp",
    "gender": "Male",
    "ip_address": "235.56.129.131"
  }, {
    "id": 3,
    "first_name": "Almire",
    "last_name": "Rabbet",
    "email": "arabbet2@phpbb.com",
    "gender": "Female",
    "ip_address": "92.35.9.104"
  }, {
    "id": 4,
    "first_name": "Reba",
    "last_name": "Younie",
    "email": "ryounie3@photobucket.com",
    "gender": "Female",
    "ip_address": "0.56.209.49"
  }, {
    "id": 5,
    "first_name": "Oberon",
    "last_name": "Pennaman",
    "email": "opennaman4@facebook.com",
    "gender": "Male",
    "ip_address": "165.84.22.121"
  }]
  
  export default MuiTable;