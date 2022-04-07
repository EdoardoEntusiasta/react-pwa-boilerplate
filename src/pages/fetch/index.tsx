import { useEffect, useRef, useState } from 'react';

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


// Translations
import { Trans } from '@lingui/macro';


// Layout
import LayoutBase from 'layouts/base/';


// Drafts
import { UsersService } from '@services/UserService';
import { CoreResponseModel } from '@core/models/Response.model';
import { UserModel } from '@models/UserModel';


const Blog = () => {

  const userService = new UsersService();

  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  const textRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    userService.get().then((res: CoreResponseModel) => {
      setData(res.getData());
      setLoading(false);
    });
  }, []);

  return (
    <>
      <LayoutBase>
        <div ref={textRef}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              Fetch
            </Typography>
            <Box>
            {
              ! loading ?
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Trans>Name</Trans></TableCell>
                        <TableCell align="right"><Trans>Surname</Trans></TableCell>
                        <TableCell align="right"><Trans>Birth date</Trans></TableCell>
                        <TableCell align="right"><Trans><Trans>Age</Trans></Trans></TableCell>
                        <TableCell align="right"><Trans>Certs.</Trans></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((user: UserModel) => (
                        <TableRow
                          key={user.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {user.name}
                          </TableCell>
                          <TableCell align="right">{user.surname}</TableCell>
                          <TableCell align="right">{user.birthdate}</TableCell>
                          <TableCell align="right">{user.getAge()}</TableCell>
                          <TableCell align="right">{user.totalCerts()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              : <CircularProgress />
            }
            </Box>
          </Container>
        </div>
      </LayoutBase>
    </>
  )
}

export default Blog