let data = require('./data.js');
module.exports = {

    get: (request, response) => {
        response.status(200).send(data);
    },
    post: (req, res) => {
        data.push((req.body));
        res.status(200).send(data);
        console.log(data);
    },
    put: (req, res) => {
        // console.log(req.params);
        data[req.params.index].name = req.params.name;
        res.status(200).send(data);
        console.log(data);
    },
    delete: (req, res) => {
        data.splice(req.params.index, 1);
        res.status(200).send(data);
        console.log(data);
    }
}