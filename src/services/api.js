import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://vision.googleapis.com/v1/images:annotate?key=SEU_TOKEN_AQUI',
});

export default api;
