const userToken = '';

export class Spotify {
  getAccessToken() {
    if (userToken) {
      return userToken;
    }
  }
}
