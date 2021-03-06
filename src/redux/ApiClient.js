import axios from 'axios';
import { omitBy, isUndefined, isNull } from 'lodash';
import store from 'store2';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
  if (!path) {
    return path;
  }

  if (/^(\/\/|http|https)/.test(path)) {
    return path;
  }
  const adjustedPath = path[0] !== '/' ? `/${path}` : path;
  // Prepend `/api` to relative URL, to proxy to API server.
  return `${process.env.API_PATH}${adjustedPath}`;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach((method) => {
      this[method] = this._req(method);
    });
  }

  _req = method => (path, { params, data, files } = {}) => new Promise((resolve, reject) => {
      const apiObj = {
          method,
          url: formatUrl(path),
      };

      if (params) {
        const emptySting = val => val === '';
        const cleanFromUndefined = omitBy(params, isUndefined);
        const cleanFromNull = omitBy(cleanFromUndefined, isNull);
        const localParam = omitBy(cleanFromNull, emptySting);
        apiObj.params = localParam || {};
      }

      if (data) {
        apiObj.data = data;
      }

      const http = axios.create ({
          // baseURL: config.apiHost,
          // timeout: 5000,
          headers: {'Content-Type': 'application/json'},
      });

      http.interceptors.request.use (
          (config) => {
              const token = store('authToken');
              const refreshToken = store('refreshToken');

              if (token) config.headers.Authorization = `Bearer ${token}`;
              if (refreshToken) config.headers.RefreshToken = refreshToken;
              return config;
          },
          (error) => reject (error)
      );

      http(apiObj)
          .then((response) => {
              resolve(response.data);
          })
          .catch((error) => {
              console.log('Error: To call API');
              reject(error);
          });
  });
}
