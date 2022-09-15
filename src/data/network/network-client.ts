import NetInfo from '@react-native-community/netinfo';
import { AxiosRequestConfig } from 'axios';
import { ApiConstants, StorageKeys } from '../../common/constants';
import { readString } from '../../common/storage';
import { AxiosClient } from './axios-client';

/**
 * Network Base class which extends Axios instance
 * Included interceptor for network check and to add Access token
 */
export class NetworkClient extends AxiosClient {
  private static instance?: NetworkClient;

  constructor() {
    super(ApiConstants.BASE_URL)
    this.initRequestInterceptor();
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new NetworkClient();
    }
    return this.instance.instance;
  }

  private initRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
  };

  private handleRequest = async (config: AxiosRequestConfig) => {
    await NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        throw Error('No Connection, Please Try Again');
      }
    });

    if (config.headers == undefined) {
      config.headers = {};
    }
    // config.headers['Authorization'] = 'Bearer ' + readString(StorageKeys.ACCESS_TOKEN);
    config.headers.Authorization = 'Bearer ' + readString(StorageKeys.ACCESS_TOKEN);

    return config;
  };
}
