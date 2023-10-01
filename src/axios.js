import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://openmarket.weniv.co.kr/',
  headers: {
    'Content-Type': 'application/json',
  },
});
