import AuthStrategy from "./AuthStrategy";

class OAuthStrategy extends AuthStrategy {
  authenticate(data) {
    return axios.post("http://localhost:8080/api/auth/oauth", data);
  }
}

export default OAuthStrategy;
