let userToken;

const Spotify = {
  getAccessToken() {
    if (userToken) {
      return userToken;
    }
    const accesToken = window.location.href.match(/access_token=([^&]*)/);
    const expireDate = window.location.href.match(/expires_in=([^&]*)/);
  },
};

export default Spotify;
