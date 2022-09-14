import { environment } from 'src/environments/environment';

export const baseUrl = environment.production
  ? 'https://jd.eleks.com'
  : 'http://virtserver.swaggerhub.com/serhii-yakymuk/ELEKS-blog-API/1.0.0';
export const postUrl = baseUrl + '/posts';
export const userUrl = baseUrl + '/register';
