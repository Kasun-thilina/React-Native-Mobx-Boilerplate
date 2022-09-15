import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {Strings} from '../../common/strings';
import {SingleResponse} from '../model';

/**
 *  Axios Network client base class
 *  included interceptors for logging data and to handle errors
 */
export abstract class AxiosClient {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });

    this.initResponseInterceptor();
  }

  private initResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  };

  private handleResponse = (response: AxiosResponse) => {
    console.log(
      `API CALL ---> ${response.status} ${response.config.baseURL} ${response.config.url}`,
    );
    try {
      var res = response.data as SingleResponse<any>;
      console.log('Response status: ' + res.message);
      if (res.message == 'success') {
        return response;
      } else {
        Promise.reject(Strings.commonError);
      }
    } catch (error) {
      Promise.reject(Strings.commonError);
    }
    return response;
  };

  protected handleError = (error: any) => {
    console.log('API FAILED ---> ' + error);
    Promise.reject(error);
  };
}
