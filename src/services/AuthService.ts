import { CoreBaseService } from '@core/services/Base.service';

// Reference model
import { AuthModel } from '@models/AuthModel';


class AuthService extends CoreBaseService {

    constructor() {
        super(AuthModel);
    }

    // LOGIN -> AuthService.post({username, password});
  
}

export default new AuthService();