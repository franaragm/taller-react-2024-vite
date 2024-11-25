module.exports = server => {

    server.post(`/api/v1/customers/create`, (req, res) => {
        console.log('');
        console.log('---------------------------> POST Request: ' + '/api/v1/customers/create');
        console.log('Headers: ', req.headers);
        console.log('Request Body: ', req.body);
        console.log('Request Params: ', req.params);
        console.log('Cookies:  ', req.cookies);

        var data_ok = require('../json/customers/customer-new-ok.json');

        setTimeout(() => {
            res.status(200).json(data_ok);
        }, 1000);
    });

    server.get(`/api/v1/customers/:id`, (req, res) => {
        console.log('');
        console.log('---------------------------> GET Request: ' + '/api/v1/customers/:id');
        console.log('Headers: ', req.headers);
        console.log('Request Body: ', req.body);
        console.log('Request Params: ', req.params);
        console.log('Cookies:  ', req.cookies);

        var data_ok = require('../json/customers/customer-data-ok.json');

        setTimeout(() => {
            res.status(200).json(data_ok);
        }, 1000);
    });

}
