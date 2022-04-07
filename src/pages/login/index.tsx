import { Trans } from '@lingui/macro';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LoginFormHolder from '@organisms/LoginFormHolder';
import { StyledMain, CardBox } from './styled';


const LoginPage = () => {
  return (
    <StyledMain>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: 'var(--100vh)', padding: '18px 20px 20px' }}
      >
        <Grid container spacing={0} direction="column" justifyContent="center" alignItems="center">
          <CardBox>
            <Box  sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h4" fontSize={16} lineHeight="18px" color="white" align="center">
                <Trans>BENVENUTO</Trans>
              </Typography>
              <LoginFormHolder />
            </Box>
          </CardBox>
        </Grid>
      </Grid>
    </StyledMain>
  );
};

export default LoginPage;
