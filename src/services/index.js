import http from "./mock";

// mock DB
import "./db/login";
http.onAny().passThrough();
