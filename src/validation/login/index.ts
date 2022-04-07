import * as Yup from 'yup';
import { t } from '@lingui/macro';

const loginSchema = Yup.object().shape({
  username: Yup.string().required(t`Necessaria`),
  password: Yup.string()
    .required(t`Necessaria`)
    .min(6, t`La password deve essere di almeno 6 caratteri`),
});

export default loginSchema;
