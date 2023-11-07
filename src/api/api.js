const configApi = {
    baseUrl: 'https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export class Api {
    constructor() {
        this._baseUrl = configApi.baseUrl;
        this._headers = configApi.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getCards() {
        return fetch(this._baseUrl, {
            method: 'POST',
            headers: this._headers
        })
        .then(this._checkResponse);
    }
}


const api = new Api();
export default api;