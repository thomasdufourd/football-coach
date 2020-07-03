const { FRONTEND_API_PATH } = require('./constants');
const { createProxyMiddleware } = require('http-proxy-middleware');

const envProperties = {
    // Important: config heroku server API_GATEWAY -> https://football-coach-api.herokuapp.com/
    API_GATEWAY: process.env.API_GATEWAY || 'http://localhost:3001'
};


const BACKEND_API_PATH = '/api';
const BACKEND_BASEURL = `${envProperties.API_GATEWAY}`;

const listOfAuthorizedAPIEndpoints = [
    new RegExp('^' + FRONTEND_API_PATH + '/players')
];

const proxyConfig = {
    target: BACKEND_BASEURL,
    changeOrigin: true,
    pathRewrite: (path, req) => {
        const isUrlAuthorized =
            listOfAuthorizedAPIEndpoints.filter(regexp => regexp.test(path)).length > 0;

        if (isUrlAuthorized) {
            return path.replace(FRONTEND_API_PATH, BACKEND_API_PATH);
        }
        return BACKEND_API_PATH + '/not-found';
    },
    secure: true,
    xfwd: true,
    logLevel: 'info',
};

if (envProperties.APIGW_HEADER) {
    proxyConfig.headers = {
        'x-nav-apiKey': envProperties.APIGW_HEADER,
    };
}

const proxy = createProxyMiddleware(FRONTEND_API_PATH, proxyConfig);

module.exports = proxy;
