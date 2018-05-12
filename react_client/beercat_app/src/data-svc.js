import axios from 'axios';

async function getUser() {
  const response = await axios.get('/api/users/me');
  return response.data;
}

async function logIn(email, password) {
  const response = await axios.post('/api/sessions', { user: { email, password } });
  return response.data;
}

export {getUser, logIn};