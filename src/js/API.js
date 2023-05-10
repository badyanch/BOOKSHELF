import axios from 'axios/dist/axios.min.js';

const instance = axios.create({
    baseURL: 'https://books-backend.p.goit.global/',
  });