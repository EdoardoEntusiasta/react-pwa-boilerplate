


import { CoreBaseModel } from '@core/models/Base.model';
import { IUser } from '@interfaces/IUser';

/**
 * Example model class
 * This class represents the object obtained through the Users endpoint
 * Methods for property manipulation can be added to this class.
 */
export class UserModel extends CoreBaseModel implements IUser {
    
    
    name: string;
    surname: string;
    birthdate: string;


    constructor(data: any) {
        super();
        if (data) {
            Object.assign(this, data);
        }
    }

    /**
     * Service resource name (api endpoint)
     * process.env.REACT_APP_PUBLIC_API_ENDPOINT + '/users'
     */
    static getResourceName() {
        return 'users';
    }


    /**
     * Sub objects
     * These items will be instantiated following the associated reference models in the following array
     * In this example, the certifications object of the User object will be an instance of the UserCertificationsModel
     */
    /*
    static getSubTypesList() {
        return [
            { object: 'certifications', model: UserCertificationModel },
        ];
    }
    */


    /**
     * In this example method we see how to get the age from the birthdate contained in the User object
     * @returns 
     */
    getAge(): string {
        return 'a';
    }

    totalCerts(): number {
        return 3;
        // return this.certifications.length;
    }

}