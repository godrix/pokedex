import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDuiBnkSrYOd1y6NgbrrVf2ADdQewTsipk',
});

export default api;