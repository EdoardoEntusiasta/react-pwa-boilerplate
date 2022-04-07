import { useMemo } from 'react';
import { AuthModel } from '@models/AuthModel';
import { useAppSelector } from '@stores/hooks';
import { authSelector } from '@stores/selectors/authSelector';

const useAuth = () => {
  const authState = useAppSelector(authSelector);

  const authModel = useMemo(() => ({ ...authState, user: new AuthModel(authState.user) }), [authState]);

  return authModel;
};

export default useAuth;
