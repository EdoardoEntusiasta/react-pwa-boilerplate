
export class CoreBaseModel {

    id: number | null = null;

    static getResourceName() {
      return '';
    }

    /**
     * Models of the sub objects of this model
     * ex. article<articleModel>.user<userModel>
     */
    static getSubTypesList(): Array<any> | null {
      return null;
      /**
       * ex.
       *  return [
       *   {object: 'team', model: TeamModel, children: OtherModel}
       *  ];
       */
    }

    getId() {
      const idKey = 'id';
      return this[idKey] ? this[idKey] : null;
    }

    getLabel() {
      return '';
    }

    getAttributeValue(key: string, defaultValue = '') {
      const index = Object.keys(this).indexOf(key);
      if (index > -1) {
        return Object.values(this)[index];
      }
      return defaultValue;
    }

    toJSONString()  {
      return JSON.stringify(this);
    }

    idToString() {
      return String(this.id);
    }

}