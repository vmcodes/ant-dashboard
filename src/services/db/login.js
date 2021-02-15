import http from "../mock";

http.onPost("/api/login").reply((config) => {
  let response = {
    sub: "123-456-7890",
    username: "John Doe",
    email: "johnd@gmail.com",
    accessToken: "asgh5at3wteagszdhtsrggdfgtsyre",
  };
  return [200, response];
});
