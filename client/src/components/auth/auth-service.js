 
import axios from 'axios';
 
class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5005/api',
      withCredentials: true
    });
    this.service = service;
  }
}
 
export default AuthService;