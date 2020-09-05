enum MimeTypes {
  JSON= "application/json"
}

enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

interface ApiFetchArguments {
  method: Methods;
  path: string;
  body?: any;
  query?: { [k: string]: string };
}

export abstract class BaseApi {

  private PROTOCOL: string = window.location.protocol
  // The replace method is to handle PROD deployment only to Virginia.
  // This should be omitted when we deploy socials to Ohio as well.
  private HOST: string = 'localhost:8080'
  private readonly BASE_PATH: string;

  protected constructor(baseUrl: string) {
    this.BASE_PATH = baseUrl || this.BASE_PATH;
  }

  apiPost<T>(path: string, body?: any): Promise<T> {
    return this.apiFetch<T>({
      method: Methods.POST,
      path,
      body
    });
  }

  apiGet<T>(path: string, query?: { [k: string]: string }): Promise<T> {
    return this.apiFetch<T>({
      method: Methods.GET,
      path,
      query
    });
  }

  private apiFetch<T>({ method, path, body }: ApiFetchArguments): Promise<T> {
    const url = `${this.PROTOCOL}//${this.HOST}${this.BASE_PATH}${path}`;
    const options: RequestInit = {
      credentials: "include",
      method,
      headers: {
        "Accept": MimeTypes.JSON,
        "Content-Type": MimeTypes.JSON,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          } else {
            return response;
          }
        })
        .then(response => response.json() as Promise<T>);
  }

}