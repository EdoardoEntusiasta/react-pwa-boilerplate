import { Trans, t } from '@lingui/macro';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authLoginRequest } from '@stores/reducers/authReducer';
import { useAppDispatch } from '@stores/hooks';
import { useAuth } from '@hooks';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import loginSchema from '@validation/login';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface IFormValues {
  username: string;
  password: string;
}

const LoginFormHolder = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAuth();

  const {
    register,
    watch,
    formState: { errors, submitCount },
    handleSubmit: handleHookSubmit,
  } = useForm<IFormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  });

  const [username, password] = watch(['username', 'password']);

  const handleSubmit = (data: IFormValues) => {
    dispatch(authLoginRequest(data));
  };

  return (
    <form noValidate onSubmit={handleHookSubmit(handleSubmit)}>
      <Box>
          <Typography variant='h3'>Login</Typography>
          <TextField
            {...register('username', { required: true })}
            fullWidth
            type="text"
            label={t`Username`}
            margin="normal"
            autoComplete="username"
            helperText={!!submitCount && errors.username && errors.username?.message}
            size="medium"
          />
          <TextField
            {...register('password', { required: true })}
            fullWidth
            type="password"
            label={t`Password`}
            margin="normal"
            autoComplete="current-password"
            helperText={!!submitCount && errors.password && errors.password?.message}
            size="medium"
          />
      </Box>
      <Box my={1}>
        { 
          error ? 
            <Alert severity="error">{error}</Alert>
          : <></>
        }
      </Box>
      <Button disabled={isLoading} fullWidth type="submit" variant="contained">
        <Trans>ACCEDI</Trans>
      </Button>
    </form>
  );
};

export default LoginFormHolder;
