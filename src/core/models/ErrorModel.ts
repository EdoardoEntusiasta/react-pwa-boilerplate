

/**
 * Error's model
 * * todo
 * for a better error management
 */

export class CoreErrorModel {

  /*
  status:
  error: 
  */

  constructor(data: any) {
    if (data) {
      Object.assign(this, data);
    }
  }

}