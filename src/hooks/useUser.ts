import { useMemo } from 'react';
import { AuthModel } from '@models/AuthModel';
import { useAppSelector } from '@stores/hooks';
import { userSelector } from '@stores/selectors/authSelector';

const useUser = () => {
  const userState = useAppSelector(userSelector);
  
  const userModel = useMemo(() => new AuthModel(userState), [userState]);

  return userModel;
};

export default useUser;
