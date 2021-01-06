import unsplash, {API_UNSPLASH} from './unsplash';

export default function createApi(type = API_UNSPLASH) {
  switch (type) {
  case API_UNSPLASH:
    return unsplash;
  default:
    throw new Error('Invalid instance of api');
  }
}

export {API_UNSPLASH};
