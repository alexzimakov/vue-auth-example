// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Returns authorized user based on access token.
 * @param accessToken
 * @returns {Promise<Object>}
 */
export async function fetchProfile(accessToken) {
  // const response = await axios.get('/authenticate', {
  //   params: { access_token: accessToken },
  // });
  // return response.data;
  await sleep(1250);
  return { id: 1, name: 'John Doe', accessToken };
}

/**
 * Logs in user using password and username.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<Object>}
 */
export async function logIn(username, password) {
  // const { data } = await axios.get('/login', {
  //   data: { password, username },
  // });
  // return { user: data.user, accessToken: data.accessToken };
  await sleep(2000);
  return {
    user: { id: 1, name: 'John Doe', username, password },
    accessToken: 'x.y.z',
  };
}
