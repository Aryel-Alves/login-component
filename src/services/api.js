import axios from 'axios';

const api = axios.create({ baseURL: 'http://test.com' })

export default api