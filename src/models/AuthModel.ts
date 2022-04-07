import { CoreBaseModel } from '@core/models/Base.model';
import { IUser } from '@interfaces/IUser';

/**
 * AuthModel class
 * IUser interface
 */
export class AuthModel extends CoreBaseModel implements IUser {

  name?: string;
  surname?: string;
  birthdate?: string;
  jwt?: string; // Used

  constructor(data: any) {
    super();
    if (data) {
      Object.assign(this, data);
    }
  }

  /**
   * Service resource name (api endpoint)
   * process.env.REACT_APP_PUBLIC_API_ENDPOINT + '/auth'
   */
  static getResourceName() {
    return 'Login';
  }

  /**
   * This is used by the authentication system.
   * You can change it according to your properties, but it is not recommended to change it.
   * @returns boolean
   */
  hasToken(): boolean {
    return this.jwt != null;
  }

}
