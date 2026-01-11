import axios, { type AxiosInstance } from "axios";

class WpApi {
  private static singleton: WpApi = new WpApi();
  private apiClient: AxiosInstance;

  private constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.WP_BASE_URL,
      timeout: 1000,
      headers: { "X-Custom-Header": "foobar" },
    });
  }

  public static get_instance(): WpApi {
    return this.singleton;
  }

  public get_apiClient(): AxiosInstance {
    return this.apiClient;
  }
}

export { WpApi };
