
import axios from "axios";
class Server {
  methods = ["put", "delete","get", "post"];
  constructor() {
    this.axios = () =>
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

    this.methods.forEach((method) => {
      Server.prototype[method] = async (url, data = {}) => {
        return this.axios()[method](url, data);
      };
    });
  }
}
export default new Server();
