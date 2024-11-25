module.exports = server => {

    const fs = require('fs');
    const path = require('path');

    server.post(`/api/v1/documents`, (req, res) => {
        console.log('');
        console.log('---------------------------> POST Request: ' + '/api/v1/documents');

        console.log('Headers: ', req.headers);
        console.log('Request Body: ', req.body);
        console.log('Request Params: ', req.params);
        console.log('Cookies:  ', req.cookies);
  
        setTimeout(() => {
            var data = fs.readFileSync(path.join(__dirname, '../files/dummy.pdf'));
            res.contentType("application/pdf");
            res.send(data);
            //res.status(204).json();
        },1000);
    });
}