const PROTOCOL = 'http:'
const HOST = 'localhost:8080'
let BASE_URL = "";
export class BaseApi {


  constructor(baseurl) {
    if (baseurl) {
      BASE_URL = baseurl;
    }
  }

  apiFetch({ method, path, body}) {
    const url = `${PROTOCOL}//${HOST}${BASE_URL}${path}`;
    const options = {
      method,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options['body'] = JSON.stringify(body);
    }

    return fetch(url, options)
      .then(response => {
          return response;
      })
      .then(response => response.json());
  }

  apiPost(path, body) {
    return this.apiFetch({
      method: "POST",
      path,
      body
    });
  }

  apiGet(path) {
    return this.apiFetch({
      method: "GET",
      path,
      body: null
    });
  }

}