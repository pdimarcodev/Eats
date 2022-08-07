import axios from 'axios';
import {GOOGLE_PLACES_API} from 'react-native-dotenv';

const googlePlacesApi = axios.create({
  baseURL: GOOGLE_PLACES_API,
});

export default googlePlacesApi;
