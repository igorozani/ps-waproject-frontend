import axios from 'axios';

const orderService = {
  save: (token: string, model: any) => {
    return axios.post('http://localhost:3001/admin/order', model, {
      headers: {
        Authorization: 'Bearer ' + token.replace('"', '').replace('"', '')
      }
    });
  },
  list: (token: string) => {
    return axios.get('http://localhost:3001/admin/order', {
      headers: {
        Authorization: 'Bearer ' + token.replace('"', '').replace('"', '')
      }
    });
  }
};
export default orderService;
