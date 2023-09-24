import axios from 'axios';

export const jsonPlaceHolder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export default jsonPlaceHolder;
