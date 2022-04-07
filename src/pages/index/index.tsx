import { useEffect, useRef, useState } from 'react';

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

// Translations
import { Trans } from '@lingui/macro';

// Atoms
import Text from '@atoms/Text';
import { Button } from '@atoms/Button';

// Layout
import LayoutBase from '@layouts/base/';

// Gsap
import { gsap } from "gsap";

// Molecules
import Modal from '@molecules/Modal';

// Drafts
import LoginFormHolder from '@organisms/LoginFormHolder';
import { UsersService } from '@services/UserService';

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@stores/reducers/counterReducer'


const IndexPage = () => {

  const userService = new UsersService();

  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  userService.get();

  const textRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
        {
            opacity: 0,
            y: '40px'
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
        }
    );
  }, []);

  return (
    <>
    {/* @ts-ignore */}
    <Modal open={modalOpen} set_open={setModalOpen}>
      <LoginFormHolder/>
    </Modal>
    <LayoutBase>
      <div ref={textRef}>
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <Trans>Welcome to boilerplate</Trans>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <Text text={<Trans>Boilerplate intro</Trans>}></Text>
          </Typography>
          <Typography variant="body1"><Trans>Wish you good work</Trans></Typography>
          <Box mt={1.5}>
            <Button label={<Trans>Login modal</Trans>} variant='contained' onClick={() => setModalOpen(true)} />
          </Box>
          <Box mt={3}>
            <Typography variant="h6" component="h1" gutterBottom>
              <Trans>Redux</Trans>
            </Typography>
            <div>
              <Button label={<Trans>Decrement</Trans>} onClick={() => dispatch(decrement())} variant="outlined"/>
              &nbsp;
              <span>{count}</span>
              &nbsp;
              <Button label={<Trans>Increment</Trans>} onClick={() => dispatch(increment())} variant="outlined"/>
            </div>
          </Box>
          <Box mt={5}>
            <Link href="/it">Italiano</Link>
            &nbsp;|&nbsp;
            <Link href="/en-US">English</Link>
          </Box>
        </Container>
      </div>
    </LayoutBase>
    </>
  )
}

export default IndexPage
