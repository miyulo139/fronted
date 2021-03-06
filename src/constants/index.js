//export const API_BASE_URL = "https://api.cs.mrg.com.pe/api-sec01-group03";
export const API_BASE_URL = "http://localhost:8080";

export const ACCESS_TOKEN = "accessToken";

//export const OAUTH2_REDIRECT_URI =
  //"https://cs.mrg.com.pe/app-sec01-group03/oauth2/redirect";
export const OAUTH2_REDIRECT_URI = "http://localhost:3000/oauth2/redirect";

export const GOOGLE_AUTH_URL =
  API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
