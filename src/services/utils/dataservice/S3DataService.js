import axios from 'axios';

class S3DataService {
    static token = null;
    constructor() {
        this._baseUrl = process.env.REACT_APP_S3_URL
    }

    get(relativeUrl, config = {}) {
        console.log("i am inside the ", relativeUrl)
        try {
            return axios.get(this._generateUrl(relativeUrl), this._config(config));
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    setBaseUrl(baseUrl) {
        this._baseUrl = baseUrl;
    }

    _generateUrl(relativeUrl) {
        return `${this._baseUrl}/${relativeUrl}`;
    }

    _config(config = {}) {
        return {
            headers: {
                'Accepts': "*",
            },
            ...config,
        };
    }
}

export default S3DataService;