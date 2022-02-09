import axios from 'axios';
import { CoreResponseModel } from '../models/Response.model';

const BASE_ENDPOINT = process.env.REACT_APP_PUBLIC_API_ENDPOINT;


export class CoreVerbsService {

    // constructor() {}
    
      formatErrors(error: any) {
        return error.error;
      }
    
      url(path: string) {
        return `${BASE_ENDPOINT}${path}`;
      }

      get(path: string, params = null, serviceUrl = BASE_ENDPOINT) {
        return axios.request({
          method: 'get',
          params,
          url: `${serviceUrl}${path}`,
          responseType:'stream'
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => new CoreResponseModel(err));
      }

      post(path: string, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'post',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => new CoreResponseModel(err));
      }

      put(path: string, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'put',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => new CoreResponseModel(err));
      }
    
      delete(path: string, data?: any | null, serviceUrl: any = BASE_ENDPOINT) {
        return axios({
          method: 'delete',
          url: `${serviceUrl}${path}`,
          data,
          responseType:'stream'
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => new CoreResponseModel(err));
      }
    
      patch(path: string, body = {}, serviceUrl = BASE_ENDPOINT) {
        return axios({
          method: 'patch',
          url: `${serviceUrl}${path}`,
          responseType:'stream',
          data: body
        })
        .then(response => {
          return new CoreResponseModel(response);
        })
        .catch(err => new CoreResponseModel(err));
      }
    
}